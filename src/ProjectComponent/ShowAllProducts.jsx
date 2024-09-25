import { hitApi } from "../Services/HitAPI";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ShowAllProduct.css";

const ShowAllProducts = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  // Fetching data
  let getProducts = async () => {
    try {
      let output = await hitApi({
        url: "/product",
        method: "GET",
      });

      setProducts(output.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleView = (item) => {
    return (e) => {
      navigate(`/products/${item._id}`);
    };
  };
  const handleEdit = (item) => {
    return (e) => {
      navigate(`/products/update/${item._id}`);
    };
  };

  const handleDelete = (item)=>{
    return async(e)=>{
      try {
        await hitApi({
          url: `http://localhost:8000/product/${item._id}`,
          method: "DELETE",
        });
        getProducts();
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <div className="container">
      {products.map((item) => (
        <div key={item._id} className="card">
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>

          <button onClick={handleView(item)}>View Product</button>

          <button onClick={handleEdit(item)}>Edit Product</button>
          <button
            onClick={handleDelete(item)}
          >
            Delete Product
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowAllProducts;
