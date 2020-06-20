import { LOGIN_USER_SUCCESS } from "../actions";

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
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        role: action.payload.role.toLowerCase(),
      };
    default:
      console.log(state);
      return state;
  }
};
