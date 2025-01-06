import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";


let x = createBrowserRouter([
  {
    path: "StartFreameWork",
    element: <Layout />,
    children: [
      { index:true , element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "Portfolio", element: <Portfolio /> },
      {path : "*" , element : <Notfound/>},
    ],
  },
]);
function App() {


  return<RouterProvider router={x}></RouterProvider> 
}

export default App;
