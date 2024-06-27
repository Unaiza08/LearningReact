import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar'
import Login from './components/Login'
import User from './components/User'
import Home from './components/Home';
import About from './components/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:"/",
    element: <><NavBar/><Home/></>
  },
  {
    path:"/login",
    element: <><NavBar/><Login/></>
  },
    {
      path: "/user/:username",
      element: <><NavBar/><User/></>,
    },
    {
      path: "/about",
      element: <><NavBar/><About/></>,
    },
])
root.render(
  <React.StrictMode> {/*whatever is in this tag will be displayed on the browser */}
    <App />  {/*app.jsx file */}
    <RouterProvider router={router}/>   {/*router prop is created and is showing the router object */}
  </React.StrictMode>
);

reportWebVitals();
