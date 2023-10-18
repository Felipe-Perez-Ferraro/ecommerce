import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import Products from '../product/Products';

function Navigation() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/products/',
      element: (
        <>
          <Navbar />
          <Products />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Navigation;
