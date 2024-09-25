import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

export const productApi = createApi({
  // reducerPath must be unique
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["readProduct", "readProductById"],

  //   query and mutation
  endpoints: (builder) => ({
    readProduct: builder.query({
      query: () => {
        return {
          url: "/product",
          method: "GET",
        };
      },
      providesTags: ["readProduct"],
      invalidatesTags: ["readProduct"],
    }),
    readProductById: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readProductById"],
      
    }),
    createProduct: builder.mutation({
      query: (body) => {
        return {
          url: "/product",
          method: "POST",
          body: body,
        };
      },
    }),

    updateProduct: builder.mutation({
      query: (info) => {
        return {
          url: `/product/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readProduct","readProductById"],
    }),
    
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["readProduct"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useReadProductQuery,
  useReadProductByIdQuery,
  useDeleteProductMutation,
} = productApi;
