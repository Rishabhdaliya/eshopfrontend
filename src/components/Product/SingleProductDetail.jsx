import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Button, ListItem, TextField, Typography } from "@mui/material";
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { calculateOrder } from "../../redux/Product/Action";

export const SingleProductDetail = (props) => {
  const store = useSelector((store) => store.product);
  const [quantity, setQuantity] = useState(1);
  const [checkout, setCheckout] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/checkout") {
      console.log(location.pathname);
      setCheckout(true);
    }
  }, []);

  const placeOrderHandler = () => {
    dispatch(calculateOrder(quantity));
  };

  return (
    <>
      <div className="detail__title detail__spacing">
        <Typography variant="h5">{store.name}</Typography>
        {!checkout && (
          <Typography className="detail__available" variant="body2">
            Available Product: {store.availableItems}
          </Typography>
        )}
      </div>
      {checkout && (
        <Typography className="detail__spacing" variant="body1">
          Quantity: <b>{store.quantity}</b>
        </Typography>
      )}
      <Typography className="detail__spacing" variant="body1">
        Category: <b>{store.category}</b>
      </Typography>
      <Typography className="detail__spacing detail__desc" variant="body2">
        <i>{store.description}</i>
      </Typography>
      <Typography color="error" className="detail__spacing" variant="h4">
        {checkout ? `Total Price ${store.totalPrice}` : `Rs ${store.price}`}
      </Typography>
      {!checkout && (
        <TextField
          required
          id="outlined-basic"
          className="login__input detail__qty detail__spacing"
          label="Enter Quantity"
          type="number"
          min={1}
          max={store.availableItems}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          variant="outlined"
        />
      )}
      <div>
        {!checkout && (
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/checkout"
          >
            <Button
              sx={{ backgroundColor: "#3F51B5", fontSize: "15px" }}
              variant="contained"
              onClick={placeOrderHandler}
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
