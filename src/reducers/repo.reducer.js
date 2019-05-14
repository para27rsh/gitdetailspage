import * as repoAction from "../actions/repo.action";
const repo =(
    state={
        status: null,
        error: null,
        userDetails: null,
        repoDetails: null,
        user: null,
        repoLoader: false
    },
    action
)=>{
    switch (action.type) {
        case repoAction.USERS_REPO_REQUEST:
          return Object.assign({}, state, {
            status: action.status,
            repoLoader: true
          });
        case repoAction.USERS_REPO_SUCCESS:
          return Object.assign({}, state, {
            repoDetails: action.userDetails,
            status: action.status,
            repoLoader: false
          });
        case repoAction.USERS_REPO_FAILURE:
          return Object.assign({}, state, {
            error: action.error
          });
        default:
          return state;
      }
};
export default repo;