import React from 'react';
import axios from 'axios';
import DeleteItems from './deleteitem';
import { useState , useEffect , useRef } from 'react';
import { Toast } from "primereact/toast";


const DeleteProduct = () => {
const toast = useRef(null);
const show = (sev, sum, mess) => {
       toast.current.show({ severity: sev, summary: sum, detail: mess });
     };
const token = JSON.parse(localStorage.getItem("auth_user"));
const[items , setItems] = useState([]);

useEffect(() => {
        axios
          .get("http://localhost:8000/api/products")
          .then((response) => {
            setItems(response.data);
            console.log(items);
          })
          .catch((error) => {
            console.log(error);
          });
}, []);

function handleDelete(id) {
    axios
      .post(
        `http://localhost:8000/api/products/delete-product`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        }
      )
      .then((response) => {
        const newitems = items.filter((item) => item.id !== id);
        console.log(newitems);
        setItems( newitems );
        show("success", "Success", "Deleted From Products");
      })
      .catch((error) => {});
  }





    return ( 
    <div className="flex flex-col items-end text-3xl text-[#65574f]">
     {items.map((i)=> <DeleteItems item={i} onDelete={handleDelete}/>)}
     <Toast ref={toast} />
      
    </div>

     );
}
 
export default DeleteProduct;