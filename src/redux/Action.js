import axios from "axios";
import ActionType from "./ActionType";

// Get Products
export const fetchProduct = () => async (dispatch) => {
  dispatch({
    type: ActionType.FETCH_PRODUCT_START,
  });
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:8080/",
      //   header: { Authorization: `Bearer ${cookies.get("token")}` },
    });
    dispatch({
      type: ActionType.FETCH_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// Add Product
export const addProduct = (data) => async (dispatch) => {
  dispatch({
    type: ActionType.ADD_PRODUCT_START,
  });

  try {
    const response = await axios({
      method: "POST",
      url: "http://localhost:8080/",
      data,
      //   header: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    dispatch({
      type: ActionType.ADD_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.ADD_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// Update Product
export const updateProduct = (_id, data) => async (dispatch) => {
  dispatch({
    type: ActionType.ADD_PRODUCT_START,
  });

  try {
    const response = await axios({
      method: "PUT",
      url: `http://localhost:8080/${_id}`,
      data,
      //   header: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    dispatch({
      type: ActionType.ADD_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.ADD_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// Delete Product
export const deleteProduct = (_id) => async (dispatch) => {
  dispatch({
    type: ActionType.ADD_PRODUCT_START,
  });

  try {
    const response = await axios({
      method: "POST",
      url: `http://localhost:8080/${_id}`,
      data,
      //   header: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    dispatch({
      type: ActionType.ADD_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.ADD_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};
