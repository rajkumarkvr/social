import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { RequiredAuth } from "./pages/RequiredAuth";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/"
        element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>
        }
      ></Route>
    </Routes>
  );
};

export default App;
