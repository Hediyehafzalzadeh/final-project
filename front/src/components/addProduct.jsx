import React , {useNavigate , useState } from 'react';
import { Dropdown } from 'primereact/dropdown';


const AddProduct = () =>{

    const [data, setData] = useState({ name: "", img: "" , price : "",category :"" });
    const [errors, setErrors] = useState({});
    const [problem, setProblem] = useState();

    const Schema = {
      name: Joi.string().required().label("Name"),
    //   img: Joi.string().required().label("Image"),
      price: Joi.string().required().label("Price"),
    //   category: Joi.string().required().label("Category"),


      
    };
  
    let history = useNavigate();
  
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
          .post("http://main-backend.test/api/auth/login", {
            name: data.name,
            img: data.img,
            price:data.price,
            category:data.category

          })
          .then(function (response) {
            // let username = data.username;
    
            // localStorage.setItem(
            //   "auth_user",
            //   JSON.stringify({
            //     username: username,
            //     access_token: response.data.access_token,
            //   })
            // );
            
            return history("/profile");
          })
          .catch(function (error) {
            console.log(error.response.data);
            setProblem(error.response.data.message);
          });
      }
    
    return (
    
        <form onSubmit={add}>
          <p className={"text-red-700 text-2xl mb-8" + (problem ? "" : "hidden")}
          >
            {problem}
          </p>
          <Input
            type={"text"}
            name={"neme"}
            value={data.name}
            label={"Name"}
            onChange={handleChange}
            error={errors["name"]}
          />
          <Input
            type={"file"}
            name={"img"}
            value={data.img}
            label={"Image"}
            onChange={handleChange}
            error={errors["img"]}
          />
           <Input
            type={"text"}
            name={"price"}
            value={data.price}
            label={"Price"}
            onChange={handleChange}
            error={errors["Price"]}
          />
          <Dropdown value={data.category} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
        placeholder="Select a City" className="w-full md:w-14rem" />

          <button
            className="w-24 mb-8 mx-auto text-2xl content-center rounded-md h-10 border-2 mt-10 border-gray-500"
            onClick={add}
          >
            Add
          </button>
         
        </form>
        )
        
    }
