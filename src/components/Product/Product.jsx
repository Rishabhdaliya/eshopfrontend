import React, { useState, useEffect } from "react";
import "./Product.css";
import { Button, ListItem, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteProduct } from "./DeleteProduct";
import { productById } from "../../redux/Product/Action";
import { useHistory } from "react-router-dom";

export const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editHandler = async (item) => {
    await dispatch(productById(item._id));

    await navigate(`/modifyproduct/${item._id}`);
  };
  const buyHandler = async (item) => {
    await dispatch(productById(item._id));

    await navigate(`/product/${item._id}`);
  };
  return (
    <>
      <div className="product">
        {props.item.map((item, index) => (
          <>
            <div className="product__card" key={index}>
              <img src={item.imageUrl} alt="" />

              <div className=" product__details">
                <div className="product__title">
                  <Typography className="product__name" variant="body2">
                    {item.name}
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
                    onClick={() => buyHandler(item)}
                    sx={{ backgroundColor: "#3F51B5", fontSize: "15px" }}
                  >
                    Buy
                  </Button>
                </Link>
                <div className="card__footerright">
                  <EditIcon
                    onClick={() => editHandler(item)}
                    className="product__icons"
                  />
                  <DeleteProduct _id={item._id} />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
