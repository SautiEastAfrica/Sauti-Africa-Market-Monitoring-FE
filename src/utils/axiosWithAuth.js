import axios from "axios";

export const axiosWithAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return axios.create({
    headers: {
      authorization: user && user.token
    },
    baseURL: "https://sautimarket.herokuapp.com/"
  });
};