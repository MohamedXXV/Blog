import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Blog from './Blog';

export default function Connection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home products={ products } />,
    },{
      path: "/blog/:id",
      element: <Blog products={ products } />,
    }
  ]);

  return <RouterProvider router={Router} />;
};