import * as userAction from "../actions/user.action.js";
const user = (
  state = {
    status: null,
    loading: false,
    value: null,
    userDetails: null,
    user: null
  },
  action
) => {
  switch (action.type) {
    case userAction.GET_USERS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });
    case userAction.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        userDetails: action.userDetails,
        status: action.status,
        loading: false
      });
    case userAction.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};
export default user;
