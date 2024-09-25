// defining store variable and initializing it
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name:"nitan",
  age:29,
  isMarried:false,
};

export const infoSlice = createSlice({
  // give unique name
  name: "infoSlice",
  // this name can be any, note the type of action will be name / reducer eg counteryou/
  // just remember use unique name
  initialState: initialStateValue,
  reducers: {
    changeName:(state,action)=>{
        state.name=action.payload
    },
    changeAge :(state,action)=>{
        state.age=action.payload
    }
  },
});

export const {changeName,changeAge} = infoSlice.actions;

export default infoSlice.reducer;
