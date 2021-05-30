import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [isProductsAdded, setIsProductAdded] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [isProductsAdded]);

  return (
    <div>
      {products.map((product, index) => (
        <Link to={`product/${product.id}`}>
          <div>
            <h1>{product.title}</h1>
            <img width="100" src={product.image} />
            <p>price:{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
