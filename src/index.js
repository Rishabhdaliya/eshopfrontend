import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Store, { persistor } from "./redux/Storage";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#2d99fe",
  //   },
  //   secondary: {
  //     main: "#141e36",
  //   },
  //   success: {
  //     main: "#28c76f",
  //   },
  //   info: {
  //     main: "#00cfe8",
  //   },
  //   warning: {
  //     main: "#ff9f43",
  //   },
  //   danger: {
  //     main: "#ea5455",
  //   },
  // },
  typography: {
    fontFamily: "Geomanist, sans-serif",
    color: "#5E5873",
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
