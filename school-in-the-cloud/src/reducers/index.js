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
    default:
      return state;
  }
};
