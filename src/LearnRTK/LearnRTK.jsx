import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changePrice, changeQuantity } from "../features/ProductSlice";

const LearnRTK = () => {
  let dispatch = useDispatch();

//   let info = useSelector((store) => {
//     return store.info;
//   });

//   let address = useSelector((store) => {
//     return store.address;
//   });

  let product = useSelector((store)=>{
    return store.product
  })
  return (
    <div>
      
      <br />
      <br />
      <br />
      <div>RTK Variable</div>
      {/* <div>{info.name}</div>
      <div>{info.age}</div>
      <div>{address.city}</div>
      <div>{address.province}</div> */}
      <div>{product.name}</div>
      <div>{product.quantity}</div>
      <div>{product.price}</div>

      {/* <button
        onClick={(e) => {
          dispatch(changeName("Saurav"));
        }}
      >
        Change Name
      </button>
      <button
        onClick={(e) => {
          dispatch(changeAge(23));
        }}
      >
        Change Age
      </button>
      <button
        onClick={(e) => {
          dispatch(changeCity("Pokhara"));
        }}
      >
        Change City
      </button>
      <button
        onClick={(e) => {
          dispatch(changeProvince(4));
        }}
      >
        Change Province
      </button> */}

      <button
        onClick={(e) => {
          dispatch(changeName("Samsung"));
        }}
      >
        Change Province
      </button>
      <button
        onClick={(e) => {
          dispatch(changeQuantity(48));
        }}
      >
        Change Province
      </button>
      <button
        onClick={(e) => {
          dispatch(changePrice(200000));
        }}
      >
        Change Province
      </button>
    </div>
  );
};

export default LearnRTK;
