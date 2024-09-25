import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../CSS/CreateProduct.css";
import { useCreateProductMutation } from "../Services/api/productService";
import ProductForm from "../ProjectComponent/ProductForm";

const CreateProductUsingRtk = () => {
  let navigate = useNavigate();
  const [resetForm, setResetForm] = useState(null); // To store resetForm method

  let [
    createProduct,
    {
      isLoading: isLoadingCreateProduct,
      isSuccess: isSuccessCreateProduct,
      isError: isErrorCreateProduct,
      error: errorCreateProduct,
      data: dataCreateProduct,
    },
  ] = useCreateProductMutation();

  useEffect(() => {
    if (isSuccessCreateProduct) {
      toast.success("Product is created successfully!", { theme: "dark" });
      if (resetForm) resetForm(); // Reset the form after success
    }
  }, [isSuccessCreateProduct, resetForm]);

  useEffect(() => {
    if (isErrorCreateProduct) {
      toast.error(errorCreateProduct?.error, { theme: "dark" });
    }
  }, [isErrorCreateProduct, errorCreateProduct]);

  let onSubmit = async (values, resetFormFromFormik) => {
    createProduct(values);
    setResetForm(() => resetFormFromFormik); // Store the resetForm function
  };

  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
        isLoading={isLoadingCreateProduct}
      />
    </div>
  );
};

export default CreateProductUsingRtk;
