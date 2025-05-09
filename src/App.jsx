import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AllProductsPage from "./pages/AllProductsPage";
import NecklacePage from "./pages/NecklacePage";
import BraceletPage from "./pages/BraceletPage";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/necklace" element={<NecklacePage />} />
          <Route path="/bracelet" element={<BraceletPage/>} />
        </Routes>
      </main>
    </div>
  );
}
