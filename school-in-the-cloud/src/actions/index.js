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

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const FETCH_VOLUNTEER_START = "FETCH_VOLUNTEER_START";
export const FETCH_VOLUNTEER_SUCCESS = "FETCH_VOLUNTEER_SUCCESS";
export const FETCH_VOLUNTEER_FAILURE = "FETCH_VOLUNTEER_START";

export const FETCH_VOLTASKS_AS_ADMIN_START = "FETCH_VOLTASKS_AS_ADMIN_START";
export const FETCH_VOLTASKS_AS_ADMIN_SUCCESS =
  "FETCH_VOLTASKS_AS_ADMIN_SUCCESS";
export const FETCH_VOLTASKS_AS_ADMIN_FAILURE =
  "FETCH_VOLTASKS_AS_ADMIN_FAILURE";

export const ADD_VOLTASKS_AS_ADMIN_START = "ADD_VOLTASKS_AS_ADMIN_START";
export const ADD_VOLTASKS_AS_ADMIN_SUCCESS = "FETCH_VOLTASKS_AS_ADMIN_SUCCESS";
export const ADD_VOLTASKS_AS_ADMIN_FAILURE = "FETCH_VOLTASKS_AS_ADMIN_FAILURE";

export const UPDATE_VOLTASKS_AS_ADMIN_START = "UPDATE_VOLTASKS_AS_ADMIN_START";
export const UPDATE_VOLTASKS_AS_ADMIN_SUCCESS =
  "FETCH_VOLTASKS_AS_ADMIN_SUCCESS";
export const UPDATE_VOLTASKS_AS_ADMIN_FAILURE =
  "FETCH_VOLTASKS_AS_ADMIN_FAILURE";

export const DELETE_VOLTASKS_AS_ADMIN_START = "DELETE_VOLTASKS_AS_ADMIN_START";
export const DELETE_VOLTASKS_AS_ADMIN_SUCCESS =
  "DELETE_VOLTASKS_AS_ADMIN_SUCCESS";
export const DELETE_VOLTASKS_AS_ADMIN_FAILURE =
  "DELETE_VOLTASKS_AS_ADMIN_FAILURE";

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

export const fetchVol = (id) => (dispatch) => {
  dispatch({ type: FETCH_VOLUNTEER_START });
  axiosWithAuth()
    .get(`/admin/volunteer/${id}`)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: FETCH_VOLUNTEERS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // console.log(err.message);
      dispatch({ type: FETCH_VOLUNTEERS_FAILURE, payload: err.message });
    });
};

export const fetchVols = () => (dispatch) => {
  dispatch({ type: FETCH_VOLUNTEERS_START });
  axiosWithAuth()
    .get("/admin/volunteer/all")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: FETCH_VOLUNTEERS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // console.log(err.message);
      dispatch({ type: FETCH_VOLUNTEERS_FAILURE, payload: err.message });
    });
};

export const fetchVolTasksAsAdmin = (id) => (dispatch) => {
  dispatch({ type: FETCH_VOLTASKS_AS_ADMIN_START });
  axiosWithAuth()
    .get(`/admin/volunteer/${id}/tasks`)
    .then((res) => {
      dispatch({ type: FETCH_VOLTASKS_AS_ADMIN_SUCCESS, payload: res.data });
      console.log("*****task array*****", res);
    })
    .catch((err) => {
      dispatch({ type: FETCH_VOLTASKS_AS_ADMIN_FAILURE, payload: err });
      console.log("err for failure******", err);
    });
};

//Add task as admin
export const addVolTasksAsAdmin = (adminId, volId, task) => (dispatch) => {
  dispatch({ type: ADD_VOLTASKS_AS_ADMIN_START });
  console.log("task in add task action: ", task);
  axiosWithAuth()
    .post(`/admin/${adminId}/tasks/${volId}`, task)
    .then((res) => {
      console.log("actions js 135", res);
      dispatch({ type: ADD_VOLTASKS_AS_ADMIN_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: ADD_VOLTASKS_AS_ADMIN_FAILURE, payload: err });
      console.log(err);
    });
};

//Update task as admin
export const updateTaskAsAdmin = (todo, task) => (dispatch) => {
  const newTodo = { ...todo, description: task };
  dispatch({ type: UPDATE_VOLTASKS_AS_ADMIN_START });
  axiosWithAuth()
    .put(`/admin/${todo.id}/tasks`, newTodo)
    .then((res) => {
      console.log("***PUT req", res.config.data);
      dispatch({
        type: UPDATE_VOLTASKS_AS_ADMIN_SUCCESS,
        payload: JSON.parse(res.config.data),
      });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_VOLTASKS_AS_ADMIN_FAILURE });
      console.log("***PUT req error", err);
    });
};
//Delete tasks as admin
export const deleteTasksAsAdmin = (id) => (dispatch) => {
  dispatch({ type: DELETE_VOLTASKS_AS_ADMIN_START });
  axiosWithAuth()
    .delete(`/admin/${id}/tasks`)
    .then((res) => {
      dispatch({ type: DELETE_VOLTASKS_AS_ADMIN_SUCCESS, payload: id });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: DELETE_VOLTASKS_AS_ADMIN_FAILURE });
      console.log(err);
    });
};
