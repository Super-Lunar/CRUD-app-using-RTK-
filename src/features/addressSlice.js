import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  city: "Kathmandu",
  province: 3,
};

export const addressSlice = createSlice({
  name: "addressSlice",

  initialState: initialStateValue,
  reducers: {
    changeCity:(state,action)=>{
        state.city=action.payload
    },
    changeProvince :(state,action)=>{
        state.province=action.payload
    }
  },
});

export const {changeCity,changeProvince} = addressSlice.actions;

export default addressSlice.reducer;
