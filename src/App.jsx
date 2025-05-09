import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AllProductsPage from "./pages/AllProductsPage";
import NecklacePage from "./pages/NecklacePage";
import BraceletPage from "./pages/BraceletPage";
import OurMission from "./components/OurMission";
import ProductDetail from "./pages/ProductDetail";
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/necklace" element={<NecklacePage />} />
          <Route path="/bracelet" element={<BraceletPage />} />
          <Route path="/ourMission" element={<OurMission />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}
