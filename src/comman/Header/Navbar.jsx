import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Button,
  TextField,
  InputAdornment,
  FormControl,
  OutlinedInput,
  MenuItem,
  AccordionDetails,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useParams } from "react-router-dom";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userName, setUserName] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const searchHandler = (event) => {
    const data = event.target.value;
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#3F51B5", padding: "0 20px 0 10px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <img
            src={logo}
            style={{ width: "120px", padding: "0 100px 0 20px " }}
            sx={{ display: { xs: "none", lg: "flex" } }}
            alt="Schbang Logo"
          /> */}
          <ShoppingCartIcon />
          <Typography
            sx={{ width: "200px", padding: "0 300px 0 20px " }}
            variant="h6"
          >
            upGrad E-Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* <TextField
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              label="search"
              onChange={searchHandler}
              sx={{
                margin: "10px 0",
                backgroundColor: " #5C6BC0",
                color: "white",
                width: "340px",
                height: "50px",
                borderRadius: "5px",
              }} */}
            {/* /> */}
            <FormControl fullWidth variant="outlined" size="small">
              <OutlinedInput
                sx={{
                  margin: "10px 0",
                  backgroundColor: " #5C6BC0",
                  color: "white",
                  width: "340px",
                  height: "40px",

                  borderRadius: "5px",
                }}
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                // value={calculationFactor}
                onChange={searchHandler}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Link className="link" to="/">
              <Typography
                variant="body1"
                sx={{ margin: "0 10px", cursor: "pointer" }}
              >
                Home
              </Typography>
            </Link>
            <Link className="link" to="/addproduct">
              <Typography
                variant="body1"
                sx={{ margin: "0 10px", cursor: "pointer" }}
              >
                Add Product
              </Typography>
            </Link>

            {false && (
              <Link className="link" to="/login">
                <Typography
                  variant="body1"
                  sx={{ margin: "0 10px", cursor: "pointer" }}
                >
                  Login
                </Typography>
              </Link>
            )}
            {false && (
              <Link className="link" to="/signup">
                <Typography
                  variant="body1"
                  sx={{ margin: "0 10px", cursor: "pointer" }}
                >
                  Sign Up
                </Typography>
              </Link>
            )}

            <Button
              sx={{ marginLeft: "10px", cursor: "pointer" }}
              color="error"
              variant="contained"
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
