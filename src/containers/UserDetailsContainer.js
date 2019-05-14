import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDetails from "../component/UserDetails.js";
import { searchUserRepo } from "../actions/repo.action.js";

const mapDispatchToProps = dispatch => {
  return {
    searchUserRepo: user => {
      dispatch(searchUserRepo(user));
    }
  };
};
const mapStateToProps = state => {
  console.log(state)
  return {
    userRepoDetails: state.repoReducers,
    //loader: state.repoLoader
  };
};

const UserDetailsContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails)
);
export default UserDetailsContainer;
