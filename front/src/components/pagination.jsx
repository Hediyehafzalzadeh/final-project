import React from "react";

import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className={itemsCount ? "" : "hidden"}>
      <ul className="bg-[#d1b6a6] text-[#65574f] w-48 flex cursor-pointer text-lg mx-auto rounded-md">
        {pages.map((page) => (
          <li
            key={page}
            className={
              " p-5 rounded-md " +
              (page === currentPage
                ? "text-xl text-[#faf0e6] bg-[#65574f]"
                : "")
            }
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
