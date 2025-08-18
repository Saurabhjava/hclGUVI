import React from "react";
import "./prod.css";

function Product({ pname, price, soldBy }) {
  return (
    <div className="prodStyle">
      <h2>ProductName:{pname}</h2>
      <h2>ProductPrice: {price}</h2>
      <h2>Sold By: {soldBy}</h2>
    </div>
  );
}

export default Product;
