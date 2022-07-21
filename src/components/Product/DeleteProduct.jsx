import React, { useState } from "react";
import "./Product.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/Product/Action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const DeleteProduct = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    if (props._id) {
      dispatch(deleteProduct(props._id));
      setTimeout(() => {
        handleClose();
      }, 500);
    }
  };

  return (
    <div>
      <DeleteIcon
        onClick={handleOpen}
        sx={{ fontSize: "30px", marginTop: "7px" }}
        className="product__icons"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Deletion of Product!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete a Product?
          </Typography>
          <div style={{ paddingTop: "15px", marginLeft: "170px" }}>
            <Button
              variant="contained"
              onClick={deleteHandler}
              sx={{ marginLeft: "auto", marginRight: "8px" }}
            >
              DELETE
            </Button>
            <Button onClick={handleClose} variant="outlined">
              CANCEL
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
