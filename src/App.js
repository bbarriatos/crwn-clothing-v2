import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";

import "./components/directory/directory-style.scss";

const Shop = () => {
  return <h1>This is shop page.</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />}></Route>
        {"/home/shop"}
      </Route>
    </Routes>
  );
};

export default App;
