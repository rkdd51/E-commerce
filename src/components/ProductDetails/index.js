import React, { useEffect, useState } from "react";

export default function ProductDetails(props) {
  const [product, setProducts] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + props.match.params.id)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [props.match.params.id]);

  return (
    <div>
      <div>
        <h1>{product?.title}</h1>
        <img width="100" src={product?.image} />
        <h3>{product.description}</h3>
        <p>price:{product?.price}</p>
   
      </div>
    </div>
  );
}
