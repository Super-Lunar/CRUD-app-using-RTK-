
import { hitApi } from "../Services/HitAPI";
import React from "react";

import "../CSS/CreateProduct.css";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  
let navigate = useNavigate()
  let onSubmit = async (values, other) => {
    // console.log(value);
    // Hit Api

    try {
      let output = await hitApi({
        url: "/product",
        method: "POST",
        data: values,
      });
      navigate("/products")
    } catch (error) {
      console.log(error.message);
    }
  };

  

  return (
    <div>
    <ProductForm
    buttonName="Create Product"
    onSubmit={onSubmit}
    />

    </div>
  );
};

export default CreateProduct;
