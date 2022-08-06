import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "./Projects/Project1415/project15/Pages/Home";
import About from "./Projects/Project1415/project15/Pages/About";
import Error from "./Projects/Project1415/project15/Pages/Error";
import SingleItem from "./Projects/Project1415/project15/Pages/SingleItem";

//Components
import NavBar from "./Projects/Project1415/project15/Components/NavBar";

//contextwrapper
import Context from "./Projects/Project1415/project15/Context";
import Contact from "./Projects/Project1415/project15/Pages/Contact";

const Component = () => {
  return (
    <Context> <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/cocktail/:id" element={<SingleItem></SingleItem>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
    </Context>
  );
};

render(<Component></Component>, document.getElementById("root"));
