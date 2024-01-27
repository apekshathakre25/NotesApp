import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
