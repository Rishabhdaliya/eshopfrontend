import axios from "axios";
import ProductActionType from "./ProductActionType";
import Cookies from "js-cookie";

// Get Products
export const fetchProduct = () => async (dispatch) => {
  dispatch({
    type: ProductActionType.FETCH_PRODUCT_START,
  });
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/products/all_products`,
      headers: { Authorization: `${Cookies.get("token")}` },
    });
    dispatch({
      type: ProductActionType.FETCH_PRODUCT_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionType.FETCH_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// Add Product
export const addProduct = (data) => async (dispatch) => {
  dispatch({
    type: ProductActionType.ADD_PRODUCT_START,
  });

  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/products`,
      data,
      headers: { Authorization: `${Cookies.get("token")}` },
    });
    dispatch({
      type: ProductActionType.ADD_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionType.ADD_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// Update Product
export const updateProduct = (_id, data) => async (dispatch) => {
  dispatch({
    type: ProductActionType.UPDATE_PRODUCT_START,
  });

  try {
    const response = await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}/api/products/update/${_id}`,
      data,
      headers: { Authorization: `${Cookies.get("token")}` },
    });
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// Delete Product
export const deleteProduct = (_id) => async (dispatch) => {
  dispatch({
    type: ProductActionType.DELETE_PRODUCT_START,
  });

  try {
    const response = await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/api/products/delete/${_id}`,

      headers: { Authorization: `${Cookies.get("token")}` },
    });
    dispatch({
      type: ProductActionType.DELETE_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionType.DELETE_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// Get One  Product
export const productById = (_id) => async (dispatch) => {
  dispatch({
    type: ProductActionType.ONE_PRODUCT_START,
  });
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/products/${_id}`,
      headers: { Authorization: `${Cookies.get("token")}` },
    });
    dispatch({
      type: ProductActionType.ONE_PRODUCT_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionType.ONE_PRODUCT_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// clear data
export const clearProductData = () => (dispatch) => {
  dispatch({
    type: ProductActionType.CLEAR_PRODUCT_DATA,
  });
};

// Set Quantity
export const calculateOrder = (data) => async (dispatch) => {
  dispatch({
    type: ProductActionType.CALCULATE_CART_SUCCESS,
    payload: data,
  });
};

// PLACE ORDER
export const placeOrder = (data) => async (dispatch) => {
  dispatch({
    type: ProductActionType.PLACE_ORDER_START,
  });

  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/orders`,
      data,
      headers: { Authorization: `${Cookies.get("token")}` },
    });
    dispatch({
      type: ProductActionType.PLACE_ORDER_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionType.PLACE_ORDER_FAIL,
      payload: error,
      isError: true,
    });
  }
};
