import "./App.css";
import { Login } from "./comman/Header/Login";
import { Navbar } from "./comman/Header/Navbar";
import { SignUp } from "./comman/Header/SignUp";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { Address } from "./components/Address/Address";
import { Home } from "./components/Home/Home";
import { Order } from "./components/Order/Order";
import { AllProducts } from "./components/Product/AllProducts";
import { Product } from "./components/Product/Product";
import { SingleProduct } from "./components/Product/SingleProduct";
import { Route, Routes } from "react-router";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/address" element={<Address />} />
        <Route path="/order" element={<Order />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
