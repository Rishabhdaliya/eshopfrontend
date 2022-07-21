import React, { useState, useEffect } from "react";
import "./SingleProduct.css";
import { Button, ListItem, TextField, Typography } from "@mui/material";
import { SingleProductDetail } from "./SingleProductDetail";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const SingleProduct = () => {
  const location = useLocation();
  const [checkout, setCheckout] = useState(false);
  const store = useSelector((store) => store.product);
  useEffect(() => {
    if (location.pathname === "/checkout") {
      console.log(location.pathname);
      setCheckout(true);
    }
  }, []);
  console.log(store.name);
  return (
    <div className={`singleproduct ${checkout ? " " : "topMargin"} `}>
      <div className=" item">
        <img src={store.image} alt="" className="singleproduct__image" />
      </div>
      <div className="singleproduct__details item">
        <SingleProductDetail />
      </div>
    </div>
  );
};
