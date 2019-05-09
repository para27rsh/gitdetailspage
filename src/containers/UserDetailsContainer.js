import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDetails from "../component/UserDetails.js";
import { searchUserRepo } from "../actions/user.action.js";

const mapDispatchToProps = dispatch => {
  return {
    searchUserRepo: user => {
      dispatch(searchUserRepo(user));
    }
  };
};
const mapStateToProps = state => {
  return {
    userRepoDetails: state.repoDetails,
    loader: state.repoLoader
  };
};

const UserDetailsContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails)
);
export default UserDetailsContainer;
