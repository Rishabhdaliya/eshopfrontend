import ProductActionType from "./ProductActionType";

const initialState = {
  allProducts: [],
  selectedProduct: {},
  isError: false,
  productId: null,
  name: "",
  category: "Automotive",
  price: 0,
  availableItems: 0,
  manufacturer: "",
  image: "",
  description: "",
  quantity: 1,
  totalPrice: 0,
  order: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH ALL PRODUCTS
    case ProductActionType.FETCH_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ProductActionType.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ProductActionType.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };

    // ADD NEW PRODUCT
    case ProductActionType.ADD_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ProductActionType.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ProductActionType.ADD_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };

    // UPDATE PRODUCT BY ID
    case ProductActionType.UPDATE_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ProductActionType.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ProductActionType.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };

    // DELETE PRODUCT BY ID
    case ProductActionType.DELETE_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ProductActionType.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    // PRODUCT BY ID
    case ProductActionType.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };
    case ProductActionType.ONE_PRODUCT_START:
      return {
        ...state,
        isError: false,
      };
    case ProductActionType.ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProduct: action.payload,
        productId: action.payload._id,
        name: action.payload.name,
        category: action.payload.category,
        price: action.payload.price,
        availableItems: action.payload.availableItems,
        manufacturer: action.payload.manufacturer,
        image: action.payload.imageUrl,
        description: action.payload.description,
      };

    case ProductActionType.ONE_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
      };

    // CLEAR DATA
    case ProductActionType.CLEAR_PRODUCT_DATA:
      return {
        ...state,
        selectedProduct: {},
        productId: null,
        name: "",
        category: "Automotive",
        price: 0,
        availableItems: 0,
        manufacturer: "",
        image: "",
        description: "",
        quantity: 1,
        totalPrice: 0,
      };

    // Calculation

    case ProductActionType.CALCULATE_CART_SUCCESS:
      return {
        ...state,
        quantity: action.payload,
        totalPrice: action.payload * state.price,
      };

    //PLACE_ORDER
    case ProductActionType.PLACE_ORDER_START:
      return {
        ...state,
        isError: false,
      };
    case ProductActionType.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };

    // PRODUCT BY ID
    case ProductActionType.PLACE_ORDER_FAIL:
      return {
        ...state,
        isError: true,
      };
    default: {
      return state;
    }
  }
};
export default ProductReducer;
