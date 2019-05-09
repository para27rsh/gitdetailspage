import React, { Component } from "react";
import styles from "./UserCard.module.css";
import Loader from "./Loader.js";
export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: null,
      searchEnable: false
    };
  }
  componentDidMount() {
    this.props.getUsers();
  }
  handleChange = val => {
    this.setState({ searchEnable: false, inputData: val });
  };
  searchUserName = () => {
    this.setState({ searchEnable: true });
    this.props.searchUsers(this.state.inputData);
  };
  onEnter = val => {
    if (val === "Enter") {
      this.setState({ searchEnable: true });
      this.props.searchUsers(this.state.inputData);
    }
  };
  routeUser = val => {
    this.props.history.push({
      pathname: `/UserDetails/${val}`,
      state: { user: `${val}` }
    });
  };
  render() {
    const data =
      this.state.searchEnable && this.state.inputData !== null
        ? this.props && this.props.userData && this.props.userData.user
        : this.props &&
          this.props.userData &&
          this.props.userData.userDetails &&
          this.props.userData.userDetails.slice(0, 10);
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props && this.props.userData && this.props.userData.loading && (
          <Loader />
        )}

        <div className={styles.base}>
          <div className={styles.dataHolder}>
            <div className={styles.searchHeading}>
              <div className={styles.searchLabel}>Search By Name</div>
              <div className={styles.searchInputHolder}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    onChange={evt => this.handleChange(evt.target.value)}
                    value={this.state.inputData}
                    className={styles.input}
                    onKeyUp={evt => this.onEnter(evt.key)}
                  />
                </div>
                {this.state.inputData && (
                  <div
                    className={styles.buttonHolder}
                    onClick={() => this.searchUserName()}
                  >
                    Submit
                  </div>
                )}
              </div>
            </div>
            {data && data.length > 0 ? (
              <div className={styles.dataCardHolder}>
                {data &&
                  data.map((val, i) => {
                    return (
                      <div
                        className={styles.card}
                        key={i}
                        onClick={() => this.routeUser(val.login)}
                      >
                        <img src={val.avatar_url} alt="" />
                        <div className={styles.label}>{val.login}</div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className={styles.notFound}>No Result Found</div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
