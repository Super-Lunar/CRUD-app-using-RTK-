import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import "../CSS/CreateProduct.css";
import ProductForm from "../ProjectComponent/ProductForm";
import {
  useReadProductByIdQuery,
  useUpdateProductMutation,
} from "../Services/api/productService";
import { toast } from "react-toastify";

const UpdateProductUsingRtk = () => {
  let { id } = useParams();
  let navigate = useNavigate();

//   update
  let [
    updateProduct,
    {
      isLoading: isLoadingUpdateProduct,
      isSuccess: isSuccessUpdateProduct,
      isError: isErrorUpdateProduct,
      error: errorUpdateProduct,
      data: dataUpdateProduct,
    },
  ] = useUpdateProductMutation();
// successUpdate
  useEffect(() => {
    if (isSuccessUpdateProduct) {
      toast.success("Product is updated successfully!", { theme: "dark" });
      navigate(`/products/${id}`);
    }
  }, [isSuccessUpdateProduct]);
// errorUpdate
  useEffect(() => {
    if (isErrorUpdateProduct) {
      toast.error(errorUpdateProduct?.error, { theme: "dark" });
    }
  }, [isErrorUpdateProduct, errorUpdateProduct]);
// getProduct
  let {
    isLoading: isLoadingReadSpecificProduct,
    isSuccess: isSuccessReadSpecificProduct,
    isError: isErrorReadSpecificProduct,
    error: errorReadSpecificProduct,
    data: dataReadSpecificProduct,
  } = useReadProductByIdQuery(id);

  // error notification for read product
  useEffect(() => {
    if (isErrorReadSpecificProduct) {
      toast.error(errorReadSpecificProduct?.error, { theme: "dark" });
    }
  }, [isErrorReadSpecificProduct, errorReadSpecificProduct]);

  // store product
  let product = dataReadSpecificProduct?.result || {};
// errorReadProduct
  useEffect(() => {
    if (isErrorUpdateProduct) {
      toast.error(errorUpdateProduct?.error, { theme: "dark" });
    }
  }, [isErrorUpdateProduct, errorUpdateProduct]);
// onSubmit
  let onSubmit = (values, other) => {
    updateProduct({ id: id, body: values });
  };

  return (
    <div>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        isLoading={isLoadingUpdateProduct}
        product={product}
      />
    </div>
  );
};

export default UpdateProductUsingRtk;
