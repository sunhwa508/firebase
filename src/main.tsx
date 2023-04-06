import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home , {loader as homeLoader} from "@/pages/Home/Home";
import List from "@/pages/List/List";
import ErrorPage from "@/error";

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                element: <Home/>,
                path: "/",
                errorElement: <ErrorPage/>,
                loader: homeLoader
            },
            {
                element: <List/>,
                path: "/list",
                errorElement: <ErrorPage/>,
                loader: homeLoader
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
