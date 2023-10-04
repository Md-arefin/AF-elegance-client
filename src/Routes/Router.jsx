import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../components/Error/ErrorPage';
import Dashboard from '../Layout/Dashboard';
import Main from '../Layout/Main';
import DashboardReview from '../Pages/Dashboard/DashboardReview/DashboardReview';
import Purchase from '../Pages/Dashboard/Purchase/Purchase';
import Home from '../Pages/Home/Home/Home';
import Kids from '../Pages/Kids/Kids';
import Mens from '../Pages/Mens/Mens';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
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
        path: "/mens/:id",
        element: <SingleProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/mens/${params.id}`),
      },
      {
        path: "/womens",
        element: <Womens />,
      },
      {
        path: "/womens/:id",
        element: <SingleProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/mens/${params.id}`),
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/kids/:id",
        element: <SingleProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/mens/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Purchase />,
      },
      {
        path: "/dashboard/review",
        element: <DashboardReview />,
      },
    ]
  }
]);

export default router;