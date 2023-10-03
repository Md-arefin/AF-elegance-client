import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from '../components/Error/ErrorPage';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Jeans from '../Pages/Jeans/Jeans';
import Kids from '../Pages/Kids/Kids';
import Mens from '../Pages/Mens/Mens';
import Womens from '../Pages/Womens/Womens';

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
          element: <Mens />,
        },
        {
          path: "/womens",
          element: <Womens />,
        },
        {
          path: "/kids",
          element: <Kids />,
        },
        {
          path: "/jeans",
          element: <Jeans />,
        },
      ],
    },
  ]);

export default router;