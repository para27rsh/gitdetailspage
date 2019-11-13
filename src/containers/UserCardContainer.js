import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserCard from "../component/UserCard.js";
import { getUsers } from "../actions/user.action.js";
import { searchUserRepo, onChangeHandler } from "../actions/repo.action";

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    searchUserRepo: () => {
      dispatch(searchUserRepo());
    },
    onChangeHandler: event => {
      console.log(event);
      dispatch(onChangeHandler(event));
    }
  };
};
const mapStateToProps = state => {
  return {
    userData: state.userReducer.userDetails,
    filteredRepo: state.repoReducers.filteredRepo,
    repoData: state.repoReducers.repoDetails,
    val: state.userReducer.value
  };
};

const UserCardContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserCard)
);
export default UserCardContainer;
