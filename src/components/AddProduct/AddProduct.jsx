import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import {
  addProduct,
  clearProductData,
  fetchProduct,
  updateProduct,
} from "../../redux/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "../../UI/Notify";

export const AddProduct = () => {
  const store = useSelector((store) => store.product);

  const [name, setName] = useState(store.name);
  const [category, setCategory] = useState(store.category);
  const [price, setPrice] = useState(store.price);
  const [description, setDescription] = useState(store.description);
  const [manufacturer, setManufacturer] = useState(store.manufacturer);
  const [availableItems, setAvailableItems] = useState(store.availableItems);
  const [image, setImage] = useState(store.image);
  const dispatch = useDispatch();
  const [notification, setNotification] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    if (store.productId !== null) {
      setName(store.name);
      setCategory(store.category);
      setPrice(store.price);
      setDescription(store.description);
      setAvailableItems(store.availableItems);
      setImage(store.image);
      setManufacturer(store.manufacturer);
    } else {
      // dispatch(clearProductData());
    }
  }, []);

  const updateHandler = () => {
    if (
      name !== "" &&
      category !== "" &&
      price !== "" &&
      availableItems !== "" &&
      manufacturer !== "" &&
      image !== "" &&
      description !== ""
    ) {
      const newProduct = {
        name: name,
        category: category,
        price: price,
        availableItems: availableItems,
        manufacturer: manufacturer,
        image: image,
        description: description,
      };
      dispatch(updateProduct(store.productId, newProduct));
      dispatch(fetchProduct());
      setNotification({
        isOpen: true,
        message: "Successfully Modified Product",
        type: "success",
      });
    }
  };

  const submitHandler = () => {
    if (
      name !== "" &&
      category !== "" &&
      price !== "" &&
      availableItems !== "" &&
      manufacturer !== "" &&
      image !== "" &&
      description !== ""
    ) {
      const newProduct = {
        name: name,
        category: category,
        price: price,
        availableItems: availableItems,
        manufacturer: manufacturer,
        image: image,
        description: description,
      };
      dispatch(addProduct(newProduct));
      dispatch(fetchProduct());
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setAvailableItems("");
      setImage("");
      setManufacturer("");
      setNotification({
        isOpen: true,
        message: "Successfully Added Product",
        type: "success",
      });
    }
  };

  return (
    <>
      <Notify notification={notification} setNotification={setNotification} />

      <div className="addproduct">
        <Typography variant="h6">
          {store.productId === null ? "Add Product" : "Modify Product"}
        </Typography>
        <TextField
          required
          id="outlined-basic"
          className="product__input"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <Box sx={{ width: 370 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="product__input"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="Automotive">Automotive</MenuItem>
              <MenuItem value="Baby Care">Baby Care</MenuItem>
              <MenuItem value="Bags  Wallets & Belts">
                Bags Wallets & Belts
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          id="outlined-basic"
          className="product__input"
          label="Manufacturer"
          value={manufacturer}
          required
          onChange={(e) => setManufacturer(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          className="product__input"
          label="Available items"
          type="number"
          value={availableItems}
          onChange={(e) => setAvailableItems(parseInt(e.target.value))}
          required
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          className="product__input"
          label="Price"
          value={price}
          required
          onChange={(e) => setPrice(parseInt(e.target.value))}
          type="number"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          className="product__input"
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          variant="outlined"
          type="text"
          required
        />

        <TextField
          id="outlined-basic"
          className="product__input"
          label="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          variant="outlined"
          required
        />
        {store.productId === null ? (
          <Button
            fullWidth
            variant="contained"
            onClick={submitHandler}
            className="address__btn"
          >
            Save Product
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            onClick={updateHandler}
            className="address__btn"
          >
            Modify Product
          </Button>
        )}
      </div>
    </>
  );
};
