import React from "react";
import "./Order.css";
import { SingleProductDetail } from "../Product/SingleProductDetail";
import { Button, ListItem, TextField, Typography } from "@mui/material";

export const Order = () => {
  return (
    <div className="order">
      <div className="order__card">
        <div>
          <SingleProductDetail className="card__product" />
        </div>
        <div className="card__address">
          <Typography className="address__head" variant="h4">
            Address Details
          </Typography>
          <Typography variant="subtitle2">Address Details</Typography>
          <Typography variant="subtitle2">Contact Number: 888888888</Typography>
          <Typography variant="subtitle2">Address Details</Typography>
          <Typography variant="subtitle2">Address Details</Typography>
          <Typography variant="subtitle2">708558</Typography>
        </div>
      </div>
    </div>
  );
};
