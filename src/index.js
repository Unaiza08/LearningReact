import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar'
import Login from './pages/Login'
import User from './components/User'
import Home from './pages/Home';
import About from './pages/About';
import Task2 from './pages/Task2'

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
    {
      path: "/task2",
      element: <><NavBar/><Task2/></>,
    },
])
root.render(
  <React.StrictMode> {/*helps to identify and detect various warnings/errors during the development phase */}
    <App />  {/*app.jsx file */}
    <RouterProvider router={router}/>   
  </React.StrictMode>
);

reportWebVitals();
