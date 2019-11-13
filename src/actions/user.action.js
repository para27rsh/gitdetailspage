import axios from "axios";
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const REQUESTING = "Requesting";
export const SUCCESS = "Success";
export const ERROR = "Error";
export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
    status: REQUESTING
  };
}
export function getUsersSuccess(userDetails) {
  return {
    type: GET_USERS_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}
export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    status: ERROR,
    error
  };
}

export function getUsers() {
  return async (dispatch, getState) => {
    dispatch(getUsersRequest());
    try {
      const result = await axios.get(
        `https://api.github.com/users/supreetsingh247`
      );

      console.log("result", result);
      const resultJson = result;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(getUsersSuccess(resultJson.data));
    } catch (e) {
      dispatch(getUsersFailure(e.message));
    }
  };
}
