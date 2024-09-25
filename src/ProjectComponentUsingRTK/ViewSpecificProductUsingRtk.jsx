import { hitApi } from "../Services/HitAPI";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/ViewProducts.css";
import { useReadProductByIdQuery } from "../Services/api/productService";

const ViewSpecificProductUsingRtk = () => {
  let { id } = useParams();

  let {
    isLoading: isLoadingReadSpecificProduct,
    isSuccess:isSuccessReadSpecificProduct,
    isError:isErrorReadSpecificProduct,
    error:errorReadSpecificProduct,
    data:dataReadSpecificProduct,
  } = useReadProductByIdQuery(id);

    // error notification for read product
    useEffect(() => {
        if (isErrorReadSpecificProduct) {
          toast.error(errorReadSpecificProduct?.error,{theme:"dark"});
        }
      }, [isErrorReadSpecificProduct, errorReadSpecificProduct]);

// store product
let product = dataReadSpecificProduct?.result || [];

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

export default ViewSpecificProductUsingRtk;
