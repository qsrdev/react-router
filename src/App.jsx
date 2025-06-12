import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Who from "./pages/Who";
import NormalLayout from "./layouts/NormalLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NormalLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/who" element={<Who />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
