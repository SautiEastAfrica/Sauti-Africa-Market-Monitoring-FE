// import { axiosWithAuth } from "../utils/axiosWithAuth";

// export const UPDATE_DATA = "UPDATE_DATA";
// export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
// export const UPDATE_ERROR = "UPDATE_ERROR";

// export const UpdateUser = (userid, obj) => (dispatch) => {
//   dispatch({ type: UPDATE_DATA });
//   console.log(`post obj`, obj);
//   return axiosWithAuth()
//     .put(`/users/${userid}`, obj)
//     .then((response) => {
//       console.log("update user response: ", response);
//       dispatch({ type: UPDATE_SUCCESS });
//     })
//     .catch((error) => {
//       console.log("update error: ", error.response);
//       dispatch({ type: UPDATE_ERROR });
//     });
// };