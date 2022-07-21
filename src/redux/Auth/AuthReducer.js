import AuthActionType from "./AuthActionType";
import Cookies from "js-cookie";

const initialState = {
  newUser: "",
  User: "",
  isAuthenticated: false,
  address: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD NEW USER
    case AuthActionType.ADD_USER_START:
      return {
        ...state,
        isError: false,
      };
    case AuthActionType.ADD_USER_SUCCESS:
      return {
        ...state,
        newUser: action.payload,
      };
    case AuthActionType.ADD_USER_FAIL:
      return {
        ...state,
        isError: true,
      };

    // LOGIN
    case AuthActionType.LOGIN_USER_START:
      return {
        ...state,
        isError: false,
      };
    case AuthActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: action.payload.data.isAuthenticated,
      };
    case AuthActionType.LOGIN_USER_FAIL:
      return {
        ...state,
        isError: true,
      };
    // logout
    case AuthActionType.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: "",
        isAuthenticated: false,
        address: "",
      };
    // Add Address
    case AuthActionType.ADD_ADDRESS_START:
      return {
        ...state,
        isError: false,
      };
    case AuthActionType.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        address: action.payload,
      };
    case AuthActionType.ADD_ADDRESS_FAIL:
      return {
        ...state,
        isError: true,
      };

    default: {
      return state;
    }
  }
};
export default AuthReducer;
