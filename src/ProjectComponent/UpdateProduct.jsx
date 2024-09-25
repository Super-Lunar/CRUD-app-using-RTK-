
import { hitApi } from "../Services/HitAPI";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import "../CSS/CreateProduct.css";
import ProductForm from "./ProductForm";

const UpdateProduct = () => {
    let {id} = useParams()
    let [product,setProduct]=useState({})
    let navigate = useNavigate()



  let getProducts = async () => {
    try {
      let output = await hitApi({
        url: `/product/${id}`,
        method: "GET",

      });
      
      setProduct(output.data.result)
    } catch (error) {
      console.log(error.message);
    }
  };

useEffect(()=>{
getProducts()
},[])

  let onSubmit = async (values, other) => {
    // console.log(value);
    // Hit Api

    try {
      let output = await hitApi({
        url: `/product/${id}`,
        method: "PATCH",
        data: values,
      });

      navigate(`/products/${id}`)
      
    } catch (error) {
      console.log(error.message);
    }
  };

  

  return (
    <div>
       <ProductForm
    buttonName="Update Product"
    onSubmit={onSubmit}
    product={product}
    />

    </div>
  );
};

export default UpdateProduct;
