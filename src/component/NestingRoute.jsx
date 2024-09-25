import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../ProjectComponent/NavBar";
import CreateProductUsingRtk from "../ProjectComponentUsingRTK/CreateProductUsingRtk";
import ShowAllProductUsingRtk from "../ProjectComponentUsingRTK/ShowAllProductUsingRtk";
import UpdateProductUsingRtk from "../ProjectComponentUsingRTK/UpdateProductUsingRtk";
import ViewSpecificProductUsingRtk from "../ProjectComponentUsingRTK/ViewSpecificProductUsingRtk";

const NestingRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Outlet />
            </div>
          }
        >
          <Route path="*" element={<div>404 page</div>}></Route>
          <Route index element={<div>Home page</div>}></Route>

          <Route
            path="products"
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route index element={<ShowAllProductUsingRtk />}></Route>
            <Route path="create" element={<CreateProductUsingRtk />}></Route>
            <Route path=":id" element={<ViewSpecificProductUsingRtk />}></Route>

            <Route
              path="update"
              element={
                <div>
                  <Outlet />
                </div>
              }
            >
              <Route index element={<div>Update page</div>}></Route>
              <Route
                path=":id"
                element={<UpdateProductUsingRtk/>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default NestingRoute;
