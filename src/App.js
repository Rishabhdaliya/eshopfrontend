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
import PrivateRoute from "./utility/PrivateRoute";
import PublicRoute from "./utility/PublicRoute";

function App() {
  return (
    <>
      <Navbar />
      <PublicRoute path="/" element={<Home />} />
      <PublicRoute exact path="/login" element={<Login />} />
      <PublicRoute exact path="/signup" element={<SignUp />} />
      <PrivateRoute exact path="/product" element={<SingleProduct />} />
      <PrivateRoute exact path="/product/:id" element={<SingleProduct />} />
      <PrivateRoute exact path="/address" element={<Address />} />
      <PrivateRoute exact path="/order" element={<Order />} />
      <PrivateRoute exact path="/addproduct" element={<AddProduct />} />
      <PrivateRoute exact path="/modifyproduct/:id" element={<AddProduct />} />
      <PrivateRoute exact path="/checkout" element={<Checkout />} />
    </>
  );
}

export default App;
