import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Jewelry Shop</Link>
        <Link to="/allProducts">Tüm Ürünler</Link>
        <Link to="/necklace">Kolyeler</Link>
        <Link to="/bracelet">Bileklikler</Link>
      </div>
    </nav>
  );
};

export default Navbar;
