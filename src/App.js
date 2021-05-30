import Navigation from "./components/Navigation";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import SignIn from "./components/SignIn";
import ProductDetails from "./components/ProductDetails";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/home" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route path="/signin" component={SignIn} />
        <Route path="/product/:id" component={ProductDetails} />
      </BrowserRouter>
    </div>
  );
}
