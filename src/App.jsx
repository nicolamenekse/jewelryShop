import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AllUsersPage from "./pages/AllProductsPage";
import MalePage from "./pages/NecklacePage";
import FemalePage from "./pages/BraceletPage";
import AboutUs from "./pages/OurMission";
import UserDetail from "./pages/ProductDetail";
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<AllUsersPage />} />
          <Route path="/male" element={<MalePage />} />
          <Route path="/female" element={<FemalePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </div>
  );
}
