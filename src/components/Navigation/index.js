import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navigation() {
  return (
    <div className="container">
      <Link to="/home">
        <div>Home</div>
      </Link>
      <Link to="/product">
        <div>Product</div>
      </Link>
      <Link to="/signin">
        <div>Signin</div>
      </Link>
      <Link to="/cart">
        <div>Cart</div>
      </Link>
    </div>
  );
}
