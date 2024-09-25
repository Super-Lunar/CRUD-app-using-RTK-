import { hitApi } from "../Services/HitAPI";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/ViewProducts.css";

const ViewProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  const getSpecificProduct = async () => {
    try {
      let output = await hitApi({
        url: `/product/${id}`,
        method: "GET",
      });
      setProduct(output.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSpecificProduct();
  }, []);

  return (
    <div className="container">
      <div className="product-card">
        <img src={product.productImage} alt={product.name} />
        <p>{product.name}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    </div>
  );
};

export default ViewProduct;
