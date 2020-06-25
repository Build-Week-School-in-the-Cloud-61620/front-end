import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_VOLUNTEERS_START,
  FETCH_VOLUNTEERS_SUCCESS,
  FETCH_VOLUNTEERS_FAILURE,
  FETCH_VOLUNTEER_START,
  FETCH_VOLUNTEER_SUCCESS,
  FETCH_VOLUNTEER_FAILURE,
  FETCH_VOLTASKS_AS_ADMIN_FAILURE,
  FETCH_VOLTASKS_AS_ADMIN_SUCCESS,
  FETCH_VOLTASKS_AS_ADMIN_START,
  ADD_VOLTASKS_AS_ADMIN_START,
  ADD_VOLTASKS_AS_ADMIN_SUCCESS,
  ADD_VOLTASKS_AS_ADMIN_FAILURE,
} from "../actions";

const initialState = {
  user: {
    id: null,
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    country: "",
  },
  volunteer: {
    id: null,
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    country: "",
  },
  student: {
    id: null,
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  },
  tasks: [],
  error: "",
  success: "",
  creatingUser: false,
  isLoggedIn: false,
  isLoggingIn: false,
  isAdding: false,
  isUpdating: false,
  isFetching: false,
  volunteers: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return { ...state, creatingUser: true, error: "", success: "" };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        creatingUser: false,
        success: "User created successfully. Please login",
      };
    case CREATE_USER_FAILURE:
      return { ...state, creatingUser: false, error: action.payload };
    case LOGIN_USER_START:
      return { ...state, isLoggingIn: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, isLoggingIn: false, user: action.payload };
    case LOGIN_USER_FAILURE:
      return { ...state, isLoggingIn: false, error: action.payload };
    case FETCH_VOLUNTEERS_START:
      return { ...state, isFetching: true, error: "" };
    case FETCH_VOLUNTEERS_SUCCESS:
      return { ...state, isFetching: false, volunteers: action.payload };
    case FETCH_VOLUNTEERS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case FETCH_VOLUNTEER_START:
      return { ...state, isFetching: true, error: "" };
    case FETCH_VOLUNTEER_SUCCESS:
      return { ...state, isFetching: false, volunteer: action.payload };
    case FETCH_VOLUNTEER_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case FETCH_VOLTASKS_AS_ADMIN_START:
      return { ...state, isFetching: true, error: "" };
    case FETCH_VOLTASKS_AS_ADMIN_SUCCESS:
      return { ...state, isFetching: false, tasks: action.payload };
    case FETCH_VOLTASKS_AS_ADMIN_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case ADD_VOLTASKS_AS_ADMIN_START:
      return { ...state, isAdding: true };
    case ADD_VOLTASKS_AS_ADMIN_SUCCESS:
      return { ...state, isAdding: false };
    case ADD_VOLTASKS_AS_ADMIN_FAILURE:
      return { ...state, isAdding: false, error: action.payload };
    default:
      return state;
  }
};
