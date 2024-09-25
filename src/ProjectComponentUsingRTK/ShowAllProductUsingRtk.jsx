import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ShowAllProduct.css";
import {
  useDeleteProductMutation,
  useReadProductQuery,
} from "../Services/api/productService";
import { toast } from "react-toastify";

const ShowAllProductUsingRtk = () => {
  let [deleteId, setDeleteId] = useState(null);
  let navigate = useNavigate();
  let {
    isError: isErrorReadProduct,

    isLoading: isLoadingReadProduct,
    data: dataReadProduct,
    error: errorReadProduct,
  } = useReadProductQuery();
  let [
    deleteProduct,
    {
      isLoading: isLoadingDeleteProduct,
      isError: isErrorDeleteProduct,
      isSuccess: isSuccessDeleteProduct,
      error: errorDeleteProduct,
    },
  ] = useDeleteProductMutation();

  // error notification for read product
  useEffect(() => {
    if (errorReadProduct) {
      toast.error(errorReadProduct?.error, { theme: "dark" });
    }
  }, [isErrorReadProduct, errorReadProduct]);

  // error notification for success of delete product
  useEffect(() => {
    if (isSuccessDeleteProduct) {
      toast.success("Product is deleted successfully!", { theme: "dark" });
    }
  }, [isSuccessDeleteProduct]);

  // error notification for error of delete product
  useEffect(() => {
    if (errorDeleteProduct) {
      toast.error(errorDeleteProduct?.error, { theme: "dark" });
    }
  }, [isErrorDeleteProduct, errorDeleteProduct]);

  // store product
  let products = dataReadProduct?.result || [];

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

  return (
    <div>
      {isLoadingReadProduct ? (
        <div>
          <h1>...Loading</h1>
        </div>
      ) : (
        <div className="container">
          {products?.map((item) => (
            <div key={item._id} className="card">
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>

              <button onClick={handleView(item)}>View Product</button>

              <button onClick={handleEdit(item)}>Edit Product</button>
              <button
                onClick={(e) => {
                  deleteProduct(item._id);
                  setDeleteId(item._id);
                }}
              >
                {isLoadingDeleteProduct  && deleteId === item._id ? (
                  <div>deleting...</div>
                ) : (
                  <div>Delete Product</div>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllProductUsingRtk;
