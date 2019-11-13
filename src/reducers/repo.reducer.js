import * as repoAction from "../actions/repo.action";
const repo = (
  state = {
    status: null,
    error: null,
    userDetails: null,
    repoDetails: null,
    filteredRepo: null,
    user: null,
    repoLoader: false
  },
  action
) => {
  switch (action.type) {
    case repoAction.USERS_REPO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        repoLoader: true
      });
    case repoAction.USERS_REPO_SUCCESS:
      return Object.assign({}, state, {
        repoDetails: action.userDetails,
        status: action.status
      });
    case repoAction.USERS_REPO_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    case repoAction.ON_CHANGE_HANDLER:
      let val = action.event.target.value;
      console.log("val", val);
      let filteredRepo = [];
      if (val.length > 0) {
        const regex = new RegExp(`^${val}`, "i");
        filteredRepo =
          state.repoDetails &&
          state.repoDetails.sort().filter(m => regex.test(m.name));
      } else {
        filteredRepo = state.repoDetails;
      }
      return Object.assign({}, state, {
        filteredRepo: filteredRepo
      });

    default:
      return state;
  }
};
export default repo;
