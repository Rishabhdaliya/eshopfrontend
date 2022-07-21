import React from "react";
import "./Order.css";
import { SingleProductDetail } from "../Product/SingleProductDetail";
import { Button, ListItem, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const Order = () => {
  const address = useSelector((store) => store.user.address);

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
          {address ? (
            <>
              <Typography variant="subtitle2">
                <b> {address.name}</b>
              </Typography>
              <Typography variant="subtitle2">
                Contact Number: {address.contactNumber}
              </Typography>
              {address.landmark && (
                <Typography variant="subtitle2">{address.landmark}</Typography>
              )}
              <Typography variant="subtitle2">{address.street}</Typography>
              <Typography variant="subtitle2">{address.city}</Typography>
              <Typography variant="subtitle2">{address.state}</Typography>
              <Typography variant="subtitle2">{address.zipcode}</Typography>
            </>
          ) : (
            <Typography color="error" variant="subtitle2">
              <b>
                Add the shipping address to place
                <br /> order
              </b>
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};
