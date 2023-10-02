import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from '../components/Error/ErrorPage';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/mens",
          element: <Home />,
        },
        {
          path: "/womens",
          element: <Home />,
        },
        {
          path: "/kids",
          element: <Home />,
        },
        {
          path: "/jeans",
          element: <Home />,
        },
      ],
    },
  ]);

export default router;