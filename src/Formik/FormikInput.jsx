import { Field, ErrorMessage } from "formik";
import React from "react";

const FormikInput = ({ name, label, type, required }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <Field id={name} name={name} type={type} required={required} />
      <ErrorMessage name={name} component="div" style={{ color: "red" }} />
    </div>
  );
};

export default FormikInput;
