import React from "react";
import Login from "./Login";
import Header from "./Header";
import Browse from "./Browse";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>,                      
        },
        {
            path:'/browse',
            element:<Browse/>,                      
        }
      ])
  return (
    <div>

        <RouterProvider router={appRouter}/>
      
      
    </div>
  );

  

};

export default Body;
