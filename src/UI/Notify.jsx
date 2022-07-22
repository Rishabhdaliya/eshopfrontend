import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
export const Notify = (props) => {
  const { notification, setNotification } = props;
  const closeHandler = (event, reason) => {
    setNotification({
      ...notification,
      isOpen: false,
    });
  };
  return (
    <>
      <Snackbar
        open={notification.isOpen}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={closeHandler}
        sx={{ margin: "80px" }}
      >
        <Alert
          onClose={closeHandler}
          severity={notification.type === "" ? "info" : notification.type}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
};
