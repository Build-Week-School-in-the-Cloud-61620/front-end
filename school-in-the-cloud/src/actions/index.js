import axiosWithAuth from "../utils/axiosWithAuth";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const LOGOUT_USER = "LOGOUT_USER";

export const FETCH_VOLUNTEERS_START = "FETCH_VOLUNTEERS_START";
export const FETCH_VOLUNTEERS_SUCCESS = "FETCH_VOLUNTEERS_SUCCESS";
export const FETCH_VOLUNTEERS_FAILURE = "FETCH_VOLUNTEERS_START";

export const CREATE_AVAILABILITY = "CREATE_AVALIABILITY";


//Login user action, needs api call to hit db, but taking in data...
export const loginUser = (credentials) => (dispatch) => {
  
  dispatch({ type: LOGIN_USER_START });
  dispatch({ type: LOGIN_USER_SUCCESS, payload: credentials });
  dispatch({
    type: LOGIN_USER_FAILURE,
    payload: "Incorrect username or password. Please try again.",
  });
};
