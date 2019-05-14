import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserCard from "../component/UserCard.js";
import { getUsers, searchUsers } from "../actions/user.action.js";

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    searchUsers: user => {
      dispatch(searchUsers(user));
    }
  };
};
const mapStateToProps = state => {
  console.log("john",state)
  return {
    userData: state.userReducer
  };
};

const UserCardContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserCard)
);
export default UserCardContainer;
