import React, { useState, useEffect } from "react";
import "./Product.css";
import { Button, ListItem, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useParams } from "react-router-dom";

export const Product = (props) => {
  return (
    <>
      <div className="product">
        {props.item.map((item) => (
          <>
            <div className="product__card">
              <img src={item.thumbnail} alt="" />

              <div className=" product__details">
                <div className="product__title">
                  <Typography className="product__name" variant="body2">
                    {item.title}
                  </Typography>
                  <Typography className="product__name" variant="body2">
                    Rs {item.price}
                  </Typography>
                </div>

                <p className="product__description">{item.description}</p>
              </div>
              <div className="card__footer">
                <Link
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/product"
                >
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#3F51B5", fontSize: "12px" }}
                  >
                    Buy
                  </Button>
                </Link>
                <div className="card__footerright">
                  <EditIcon className="product__icons" />
                  <DeleteIcon className="product__icons" />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
