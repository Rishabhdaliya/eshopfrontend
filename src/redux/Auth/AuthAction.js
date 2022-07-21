import axios from "axios";
import AuthActionType from "./AuthActionType";
import Cookies from "js-cookie";

// Signup
export const addUser = (data) => async (dispatch) => {
  dispatch({
    type: AuthActionType.ADD_USER_START,
  });

  try {
    const response = await axios({
      method: "POST",
      url: `http://localhost:8080/api/user/sign-up`,
      data,
      //   header: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    dispatch({
      type: AuthActionType.ADD_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AuthActionType.ADD_USER_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// login

export const login = (data) => async (dispatch) => {
  dispatch({
    type: AuthActionType.LOGIN_USER_START,
  });

  try {
    const response = await axios({
      method: "POST",
      url: `http://localhost:8080/api/user/auth`,
      data,
      //   header: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    dispatch({
      type: AuthActionType.LOGIN_USER_SUCCESS,
      payload: response.data,
    }).then(
      () => Cookies.set("token", response.data.token),
      Cookies.set("userName", response.data.data.name),
      Cookies.set("role", response.data.data.role),
      Cookies.set("isAuthenticated", response.data.data.isAuthenticated),
      Cookies.set("token", response.data.token),
      sessionStorage.setItem("token", response.data.token)
    );
  } catch (error) {
    dispatch({
      type: AuthActionType.LOGIN_USER_FAIL,
      payload: error,
      isError: true,
    });
  }
};

// logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: AuthActionType.LOGOUT_USER_SUCCESS,
  });
};

// Add users Address
export const addAddress = (data) => async (dispatch) => {
  dispatch({
    type: AuthActionType.ADD_ADDRESS_START,
  });

  try {
    const response = await axios({
      method: "POST",
      url: `http://localhost:8080/api/addresses/add-address`,
      data,
      //   header: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    dispatch({
      type: AuthActionType.ADD_ADDRESS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: AuthActionType.ADD_ADDRESS_FAIL,
      payload: error,
      isError: true,
    });
  }
};
