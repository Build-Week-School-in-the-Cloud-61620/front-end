import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://school-in-the-cloud-ls-bw.herokuapp.com/api",
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
