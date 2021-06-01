import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function ProductDetails(props) {
  const [product, setProducts] = useState({});
  const [cart,setCart] = useState([]);

  const history = useHistory();


  const addToCart = (product) => {
    console.log('ram');
    setCart([...cart,product])
  }

  const gotoCart = () =>{
    console.log('this is my cart');
    history.push("/cart");
    addToCart();

  }

  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + props.match.params.id)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [props.match.params.id]);

  return (
    <div>
      <div>
      <header>
            <button onClick={()=>gotoCart()}>Go to Cart({cart.length})</button>
          </header>
        <h1>{product?.title}</h1>
        <img width="100" src={product?.image} />
        <h3>{product.description}</h3>
        <p>price:{product?.price}</p>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
   
      </div>
    </div>
  );
}
