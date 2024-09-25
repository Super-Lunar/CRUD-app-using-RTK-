CRUD APPLICATION USING RTK

URL for product

localhost:5173/products => give all product
localhost:5173/products/:id => give specific product
localhost:5173/products/create => form to add product
localhost:5173/products/update/:id => form to update specific product


Create Product
    - create product form
    - hit api onSubmit

read products
    - hit api and display data

    
product delete
get single product


for formik we need
    - name (Compulsory)
    - label (Compulsory)
    - type (Only for formik input)
    - onChange
    - required
    - option (radio,select) (array of object)

    why global state management or redux is required
    because we can't send data from one sibling to another
    because of prop drilling

REDUX - RTK 

npm i @reduxjs/toolkit react-redux

1. store configuration (it is one time setup)
    - create store by using configureStore
    - provide store by the help of Provider wrapper at index.js
    so that all component can use store variable <Provider store = {store}></Provider>

2. defining variable in store and initializing it 
    - create slice (do as boiler plate) mainly change name and initialValue
    - add slice to store

3. get store variable 
    - useSelector

4. change store variable
    - make function that can change store variable in slice folder and export it
    - useDispatch which call function of slice

thus slice folder is important
a. which will add variable in store and initialize it 
b. where function is defined which will change store variable 

search redux devtools


rtk to hit api 
    - create api
    - use the api to store

at store
    boiler plate code

      middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat([]),

for services/ api (boilerplate)

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productApi = createApi({
    reducerPath:"blogApiApi",
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
    }),
    tagTypes:[],
    endpoints:(builder)=>({})
})

export const {} = blogApi

useReadProductQuery();
Query gives object

 useDeleteProductMutation()
 Mutation gives array