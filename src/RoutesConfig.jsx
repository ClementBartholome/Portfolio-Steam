import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/Portfolio-Steam" element={<HomePage />} />
      <Route path="/Portfolio-Steam/login" element={<LoginPage />} />
    </Routes>
  );
}
