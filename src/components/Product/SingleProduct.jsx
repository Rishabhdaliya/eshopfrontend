import React from "react";
import "./SingleProduct.css";
import { Button, ListItem, TextField, Typography } from "@mui/material";
import { SingleProductDetail } from "./SingleProductDetail";

export const SingleProduct = () => {
  return (
    <div className="singleproduct">
      <div className=" item">
        <img
          src="https://cdn.pixabay.com/photo/2019/03/28/22/23/link-4088190_960_720.png"
          alt=""
          className="singleproduct__image"
        />
      </div>
      <div className="singleproduct__details item">
        <SingleProductDetail />
      </div>
    </div>
  );
};
