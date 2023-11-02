import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import Navigation from "./components/Navigation";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
    <Navigation />
    <main>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/family" element={<CategoryPage  category={"Family"}/>} />
        <Route path="/work" element={<CategoryPage  category={"Work"} />} />
        <Route path="/personal" element={<CategoryPage  category={"Personal"} />} />
    </Routes>
    </main>
    </>
  );
}

export default App;
