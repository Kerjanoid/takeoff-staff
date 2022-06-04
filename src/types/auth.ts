export interface AuthState {
  isLoggedIn: boolean,
  isLoading: boolean,
  error: null | string
}
export enum AuthActionTypes {
  AUTH = 'AUTH',
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  AUTH_ERROR = 'AUTH_ERROR'
}
interface FetchAuthAction {
  type: AuthActionTypes.AUTH;
}
interface FetchLoginAction {
  type: AuthActionTypes.AUTH_LOGIN;
  payload: {
    isLoggedIn: boolean,
    id: number
  };
}
interface FetchLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT;
  payload: {
    isLoggedIn: boolean,
    id: number
  };
}
interface FetchErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}

export type AuthAction = FetchAuthAction | FetchLoginAction | FetchLogoutAction | FetchErrorAction
