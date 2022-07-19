import React from "react";
import "./SingleProduct.css";
import { Button, ListItem, TextField, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export const SingleProductDetail = () => {
  return (
    <>
      <div className="detail__title detail__spacing">
        <Typography variant="h4">Title</Typography>
        {false && (
          <Typography className="detail__available" variant="body2">
            Available Product: 148
          </Typography>
        )}
      </div>
      {true && (
        <Typography className="detail__spacing" variant="body1">
          Quantity: <b>1</b>
        </Typography>
      )}
      <Typography className="detail__spacing" variant="body1">
        Category: <b>Category</b>
      </Typography>
      <Typography className="detail__spacing detail__desc" variant="body2">
        <i>
          To set the minimal distance between flexbox items I'm using margin: 0
          5px on .item and margin: 0 -5px on container. For me it seems like a
          hack, but I can't
        </i>
      </Typography>
      <Typography color="error" className="detail__spacing" variant="h4">
        {true ? "Total Price" : "Rs"} 2000
      </Typography>
      {false && (
        <TextField
          required
          id="outlined-basic"
          className="login__input detail__qty detail__spacing"
          label="Enter Quantity"
          type="number"
          variant="outlined"
        />
      )}
      <div>
        {false && (
          <Link className="link" style={{ textDecoration: "none" }} to="/">
            <Button
              variant="contained"
              className=" detail__spacing detail__btn"
            >
              Place Order
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};
