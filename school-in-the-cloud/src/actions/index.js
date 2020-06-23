import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

import { useHistory } from "react-router-dom";

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

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

//Login user action, needs api call to hit db, but taking in data...
export const loginUser = (credentials, props) => (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  axiosWithAuth()
    .post(`/auth/login`, credentials)
    .then((res) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.user });
      console.log(res, res.data);
      localStorage.setItem("token", res.data.token);
      props.history.push("/protected");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: `${err.message}. Incorrect username or password. Please try again.`,
      });
    });
};

//Create user...
export const createUser = (user) => (dispatch) => {
  dispatch({ type: CREATE_USER_START });
  axiosWithAuth()
    .post(`/auth/register`, user)
    .then((res) => {
      console.log(res);
      dispatch({ type: CREATE_USER_SUCCESS, payload: user });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: CREATE_USER_FAILURE,
        payload: `${err.message}. Please try again.`,
      });
    });
};

// export const fetchTodos = () => dispatch => {

// }

// export const fetchTasks = (user) = (dispatch) => {
//   dispatch({ type: FETCH_TODOS_START });
//   dispatch({ type: FETCH_TODOS_SUCCESS, payload: user.tasks });

// });
