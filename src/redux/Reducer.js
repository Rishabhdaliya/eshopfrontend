import ActionType from "./ActionType";

const initialState = {
  allProducts: [],
  selectedProduct: {},
  isError: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ActionType.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ActionType.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };

    case ActionType.ADD_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ActionType.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ActionType.ADD_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };

    case ActionType.UPDATE_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ActionType.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ActionType.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };
    case ActionType.DELETE_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ActionType.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: allProducts.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case ActionType.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };

    default: {
      return state;
    }
  }
};
export default Reducer;
