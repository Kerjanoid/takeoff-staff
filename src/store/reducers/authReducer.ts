import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth";

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      return { isLoggedIn: false, isLoading: true, error: null }
    case AuthActionTypes.AUTH_LOGIN:
      return { isLoggedIn: action.payload.isLoggedIn, isLoading: false, error: null }
    case AuthActionTypes.AUTH_LOGOUT:
      return { isLoggedIn: action.payload.isLoggedIn, isLoading: false, error: null }
    case AuthActionTypes.AUTH_ERROR:
      return { isLoggedIn: false, isLoading: true, error: action.payload }
    default:
      return state
  }
}
