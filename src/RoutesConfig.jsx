import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/Portfolio-Steam" element={<HomePage />} />
    </Routes>
  );
}