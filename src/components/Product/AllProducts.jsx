import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./AllProducts.css";
import { Product } from "./Product";
import { useSelector } from "react-redux";
import { clearProductData } from "../../redux/Product/Action";

export const AllProducts = () => {
  const [alignment, setAlignment] = useState("web");
  const [age, setAge] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [apiData, setapiData] = useState([]);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/products/all_products"
      );
      setProduct(response.data.data);
      setapiData(response.data.data);
      setLoading(false);
    };
    loadPost();
    dispatch(clearProductData());
  }, []);

  const handleSort = (event) => {
    setAge(event.target.value);
    if (event.target.value === 20) {
      const sorted = product.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setProduct(sorted);
    } else if (event.target.value === 30) {
      const sorted = product.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setProduct(sorted);
    } else if (event.target.value === 40) {
      const sorted = product.sort(
        (a, b) =>
          parseFloat(b.createdAt.join()) - parseFloat(a.createdAt.join())
      );
      setProduct(sorted);
    } else {
      setProduct(product);
    }
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (event.target.value === "Baby Care") {
      const selected = apiData.filter((item) => item.category === "Baby Care");
      setProduct(selected);
    } else if (event.target.value === "Automotive") {
      const selected = apiData.filter((item) => item.category === "Automotive");
      setProduct(selected);
    } else if (event.target.value === "Bags  Wallets & Belts") {
      const selected = apiData.filter(
        (item) => item.category === "Bags  Wallets & Belts"
      );
      setProduct(selected);
    } else {
      setProduct(apiData);
    }
  };
  return (
    <div className="allproducts">
      <div className="toggle">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="ALL">ALL</ToggleButton>
          <ToggleButton value="Baby Care">APPAREL</ToggleButton>
          <ToggleButton value="Automotive">AUTOMOTIVE</ToggleButton>
          <ToggleButton value="Bags  Wallets & Belts">
            PERSONAL CARE
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="sort">
        <Box sx={{ width: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Sort By"
              onChange={handleSort}
            >
              <MenuItem value={10}>Default</MenuItem>
              <MenuItem value={20}>Price high to low</MenuItem>
              <MenuItem value={30}>Price low to high</MenuItem>
              <MenuItem value={40}>Newest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="products">
        <Product item={product} />
      </div>
    </div>
  );
};
