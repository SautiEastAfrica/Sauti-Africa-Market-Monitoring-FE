import axios from "axios";

export const axiosWithAuth = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  console.log('this is user',user)

  return axios.create({
    headers: {
      authorization: user.token
    },
    baseURL: "https://sautimarket.herokuapp.com/"
  });
};