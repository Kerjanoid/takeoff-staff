import { Dispatch } from "redux";
import axios from "axios";
import { AuthAction, AuthActionTypes } from "../../types/auth";

export const logIn = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.AUTH })
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", { isLoggedIn: true });
      dispatch({ type: AuthActionTypes.AUTH_LOGIN, payload: response.data });
      localStorage.setItem("isLoggedIn", response.data.isLoggedIn);
    } catch (e) {
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: "Something went wrong. Please try again." })
    }
  }
}

export const logOut = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", { isLoggedIn: false });
      dispatch({ type: AuthActionTypes.AUTH_LOGOUT, payload: response.data });
      localStorage.clear();
    } catch (e) {
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: "Something went wrong. Please try again." })
    }
  }
}
