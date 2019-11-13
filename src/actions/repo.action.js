import axios from "axios";
export const USERS_REPO_REQUEST = "USERS_REPO_REQUEST";
export const USERS_REPO_SUCCESS = "USERS_REPO_SUCCESS";
export const USERS_REPO_FAILURE = "USERS_REPO_FAILURE";
export const ON_CHANGE_HANDLER = "ON_CHANGE_HANDLER";
export const REQUESTING = "Requesting";
export const SUCCESS = "Success";
export const ERROR = "Error";
export function usersRepoRequest() {
  return {
    type: USERS_REPO_REQUEST,
    status: REQUESTING
  };
}
export function usersRepoSuccess(userDetails) {
  return {
    type: USERS_REPO_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}
export function usersRepoFailure(error) {
  return {
    type: USERS_REPO_FAILURE,
    status: ERROR,
    error
  };
}
export function onChangeHandler(event) {
  return {
    type: ON_CHANGE_HANDLER,
    status: ERROR,
    event
  };
}

export function searchUserRepo() {
  return async (dispatch, getState) => {
    dispatch(usersRepoRequest());
    try {
      const result = await axios.get(
        `https://api.github.com/users/supreetsingh247/repos`
      );
      console.log("reporesult", result);
      const resultJson = result;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(usersRepoSuccess(resultJson.data));
    } catch (e) {
      dispatch(usersRepoFailure(e.message));
    }
  };
}
