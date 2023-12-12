import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { RequiredAuth } from "./pages/RequiredAuth";
import Contact from "./pages/Contact";
const App = () => {
  return <>
    <Routes>
    <Route path="/login" element={<RequiredAuth><Login /></RequiredAuth>}></Route>
    <Route path="/register" element={<RequiredAuth><Register /></RequiredAuth>}></Route>
    <Route path="/" element={<RequiredAuth><Home /></RequiredAuth>}></Route>
    <Route path="/contact" element={<RequiredAuth><Contact/></RequiredAuth>}></Route>
    <Route path="*" element={<h1>Page not found!</h1>}></Route>
  </Routes>
  </>
};

export default App;
