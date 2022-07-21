const ProductActionType = {
  //GET  Products
  FETCH_PRODUCT_START: "FETCH_PRODUCT_START",
  FETCH_PRODUCT_SUCCESS: "FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_FAIL: "FETCH_PRODUCT_FAIL",

  //Add  Product
  ADD_PRODUCT_START: "ADD_PRODUCT_START",
  ADD_PRODUCT_SUCCESS: "ADD_PRODUCT_SUCCESS",
  ADD_PRODUCT_FAIL: "ADD_PRODUCT_FAIL",

  //Update  Product
  UPDATE_PRODUCT_FAIL: "UPDATE_PRODUCT_FAIL",
  UPDATE_PRODUCT_START: "UPDATE_PRODUCT_START",
  UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",

  //Delete  Product
  DELETE_PRODUCT_START: "DELETE_PRODUCT_START",
  DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
  DELETE_PRODUCT_FAIL: "DELETE_PRODUCT_FAIL",

  //GET ONE Products
  ONE_PRODUCT_START: "ONE_PRODUCT_START",
  ONE_PRODUCT_SUCCESS: "ONE_PRODUCT_SUCCESS",
  ONE_PRODUCT_FAIL: "ONE_PRODUCT_FAIL",

  // set Calcualte
  CALCULATE_CART_SUCCESS: "CALCULATE_CART_SUCCESS",

  //GET ONE Products
  CLEAR_PRODUCT_DATA: "CLEAR_PRODUCT_DATA",
};
export default ProductActionType;