import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home.js"
import BlogView from "./views/BlogView/BlogView.js"
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>

  },
  {
    path:"/blog/:id",
    element:<BlogView/>

  },
  {
    path:"*",
    element:<h1>404 Not Found</h1>
  }
])
root.render(
  <RouterProvider router={router} />
);

