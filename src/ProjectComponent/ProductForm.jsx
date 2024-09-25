import { Form, Formik } from "formik";

import React from "react";
import * as yup from "yup";
import FormikInput from "../Formik/FormikInput";

import "../CSS/CreateProduct.css";

const ProductForm = ({
  buttonName = "Create Product",
  onSubmit = () => {},
  product = {},
  isLoading = false,
}) => {
  let initialValues = {
    name: product.name || "",
    price: product.price || 0,
    quantity: product.quantity || 0,
    productImage: product.productImage || "",
  };

  let validationSchema = yup.object({
    name: yup.string().required("Name is Required."),
    quantity: yup.number().required("Quantity is Required."),
    price: yup.number().required("Price is Required."),
    productImage: yup.string().required("ProductImage is Required."),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions.resetForm)}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(formik) => (
          <div className="form-container">
            <div className="form-card">
              <Form>
                <FormikInput
                  name="name"
                  label="Name"
                  type="text"
                  required={true}
                />
                <FormikInput
                  name="quantity"
                  label="Quantity"
                  type="number"
                  required={true}
                />
                <FormikInput
                  name="price"
                  label="Price"
                  type="number"
                  required={true}
                />
                <FormikInput
                  name="productImage"
                  label="Product Image"
                  type="text"
                  required={true}
                />
                <div className="button">
                  <button type="submit">
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <div>{buttonName}</div>
                    )}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
