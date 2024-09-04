import React, { useNavigate, useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Input from "./input";
import axios from "axios";
import _ from "lodash";
import { Toast } from "primereact/toast";
import { RadioButton } from "primereact/radiobutton";
import { FileUpload } from "primereact/fileupload";

const AddProduct = () => {
  const [data, setData] = useState({ productname: "", price: "" });
  const [errors, setErrors] = useState({});
  const [problem, setProblem] = useState();
  const [ img , setImg] = useState('');
  
  const toast = useRef(null);
  const show = (sev, sum, mess) => {
    toast.current.show({ severity: sev, summary: sum, detail: mess });
  };
  const categories = [
    { name: "men", key: "A" },
    { name: "women", key: "M" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);

  const Schema = {
    productname: Joi.string().required().label("Name"),
    price: Joi.number().required().label("Price"),
    // img: Joi.required().label("Image"),
  };

  // let history = useNavigate();

  function validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, Schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  function validateProperty({ name, value }) {
    const obj = { name: value };
    const schema = { name: Schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    setImg(base64);
  }
  const handleChange = ({ currentTarget: input }) => {
    const ndata = { ...data };
    ndata[input.name] = input.value;
    setData(ndata);

    const nerrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) nerrors[input.name] = errorMessage;
    else delete nerrors[input.name];

    setErrors(nerrors);
  };

  function add(e) {
    e.preventDefault();
    const nerrors = validate();
    setErrors(nerrors || {});
    if (!_.isEmpty(nerrors)) {
      console.log(errors);
      return;
    }

    axios
      .post(
        "http://localhost:8000/api/products/add-new-product",
        {
          productname: data.productname,
          price: data.price,
          img : img ,
          category: selectedCategory.name,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        show("success", "Success", "Product Added");
        window.location.reload();
      })
      .catch(function (error) {
        setProblem(error.response.data.message)
      });
  }


  return (
    
    <div className="  bg-[#e3d5ca] rounded-lg text-[#65574f] mt-6 w-4/5 mx-auto">
      <h1 className=" mb-5 md:text-3xl text-xl">Add a new Product </h1>

      <div className="flex flex-col items-center">
        <form onSubmit={add} className=" ">
          <p
            className={"text-red-700 md:text-2xl mb-8" + (problem ? "" : "hidden")}
          >
            {problem}
          </p>
          <Toast ref={toast} />
          <Input
            type={"text"}
            name={"productname"}
            value={data.name}
            label={"Name"}
            onChange={handleChange}
            error={errors["productname"]}
          />

          <Input
            type={"text"}
            name={"price"}
            value={data.price}
            label={"Price"}
            onChange={handleChange}
            error={errors["price"]}
          />

          <input
          className=" md:text-3xl text-xl"
            name={"img"}
            label={"Image"}
            type={"file"}
            onChange={e=>handleFileRead(e)}
          ></input>

          <div className="card flex justify-content-center mt-8">
            <div className="flex flex-column gap-3">
              {categories.map((category) => {
                return (
                  <div key={category.key} className="flex align-items-center">
                    <RadioButton
                      inputId={category.key}
                      name="category"
                      value={category}
                      onChange={(e) => setSelectedCategory(e.value)}
                      checked={selectedCategory.key === category.key}
                    />
                    <label htmlFor={category.key} className="ml-2">
                      {category.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <Dropdown value={data.category} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
        placeholder="Select a City" className="w-full md:w-14rem" /> */}

          <button
            className="w-24 mb-8 mx-auto text-2xl content-center rounded-md h-10 border-2 mt-10 border-gray-500"
            onClick={add}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
