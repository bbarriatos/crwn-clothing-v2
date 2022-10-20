import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import SignIn from "./routes/sign-in/SignIn";

import "./components/directory/directory-style.scss";

const Shop = () => {
  return <h1>This is shop page.</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
