import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../components/productCard";
import ListGroup from "./../components/listGroup";
import Pagination from "../components/pagination";
import { paginate } from "../paginate";
import axios from "axios";

function ShowProducts({}) {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  var categories = [
    { id: 0, name: "All" },
    { id: 1, name: "men" },
    { id: 2, name: "women" },
  ];

  setParamsCategory();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function setParamsCategory() {
    if (category && !(selectedCategory?.name === category)) {
      setSelectedCategory(categories.find((cat) => cat.name === category));
    }
    if (!category && selectedCategory?.name !== "All") {
      setSelectedCategory(categories.find((cat) => cat.name === "All"));
    }
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleCategorySelect() {
    setParamsCategory();
    setCurrentPage(1);
  }

  function getPagedData() {
    let filtered = items;
    if (searchParams.get("q") && searchParams.get("q").length > 2) {
      filtered = items.filter((m) =>
        m.name.toLowerCase().startsWith(searchParams.get("q").toLowerCase())
      );
    }
    if (selectedCategory && selectedCategory.id) {
      filtered = items.filter((m) => m.category === selectedCategory.name);
    }

    const fitems = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered?.length, fitems: fitems };
  }

  const { totalCount, fitems } = getPagedData();

  return (
    <div>
      <div className="flex w-full min-h-full">
        <div className="flex flex-wrap my-10 gap-4 text-center basis-4/5 justify-center">
          {fitems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <div className="basis-1/5  mr-12 mt-12   ">
          <ListGroup
            items={categories}
            selectedItem={selectedCategory}
            onItemSelect={handleCategorySelect}
          />
        </div>
      </div>
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ShowProducts;
