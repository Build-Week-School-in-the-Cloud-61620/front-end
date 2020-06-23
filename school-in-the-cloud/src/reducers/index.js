import {
  LOGIN_USER_SUCCESS,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "../actions";

const initialState = {
  user: {
    id: null,
    name: "",
    username: "",
    email: "",
    password: "",
    role: "student",
    country: "",
    tasks: [],
    times: [],
  },
  error: "",
  success: "",
  creatingUser: false,
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
    default:
      return state;
  }
};
