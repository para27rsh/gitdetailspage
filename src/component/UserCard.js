import React, { Component } from "react";
import styles from "./UserCard.module.css";
import Loader from "./Loader.js";
import extraInfo from "./img/leftsideIcons.png";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchEnable: false
    };
  }
  onClickHandler = () => {
    this.setState({
      searchEnable: true
    });
  };

  hideInputFocus = () => {
    this.setState({
      searchEnable: false
    });
  };
  componentDidMount() {
    this.props.getUsers();
    this.props.searchUserRepo();
  }

  render() {
    let finalRepoArr;
    const userData = this.props && this.props.userData && this.props.userData;
    const repoData = this.props && this.props.repoData && this.props.repoData;
    const filteredRepo =
      this.props && this.props.filteredRepo && this.props.filteredRepo;
    if (filteredRepo !== null) {
      finalRepoArr = filteredRepo;
    } else {
      finalRepoArr = repoData;
    }

    console.log("userData", userData);
    console.log("repoData", repoData);
    console.log("filteredRepo", filteredRepo);

    console.log("finalRepoArr", finalRepoArr);
    console.log("this.props", this.props);
    return (
      <React.Fragment>
        {this.props && this.props.userData && this.props.userData.loading && (
          <Loader />
        )}
        <div className={styles.base}>
          <div className={styles.leftSectionWrapper}>
            <div className={styles.leftSection}>
              <div className={styles.imageAndName}>
                {userData && userData.avatar_url && (
                  <div className={styles.imageHolder}>
                    <img src={userData.avatar_url} alt="" />
                  </div>
                )}
                <div className={styles.nameOfUser}>
                  {userData && userData.name}
                </div>
                <div className={styles.loginnameOfUser}>
                  {userData && userData.login}
                </div>
                <div className={styles.bio}>{userData && userData.bio}</div>
                <div className={styles.editButton}>
                  <button>Edit Bio</button>
                </div>

                <div className={styles.extraInfo}>
                  <img src={extraInfo}></img>
                  <div className={styles.extraInfoDetails}>
                    <div>{userData && userData.company}</div>
                    <div>{userData && userData.location}</div>
                    <div>{userData && userData.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSectionWrapper}>
            <div className={styles.rightSection}>
              <div className={styles.header}>
                <ul>
                  <li>Overview</li>
                  <li>
                    Repositories
                    <span className={styles.counter}>
                      {repoData && repoData.length}
                    </span>
                  </li>
                  <li>Stars</li>
                  <li>Followers</li>
                  <li>Following</li>
                </ul>
              </div>
              <div className={styles.searchBarHolder}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    value={this.props.val}
                    className={
                      this.state.searchEnable
                        ? styles.inputOutline
                        : styles.input
                    }
                    placeholder="Find a repository..."
                    onChange={this.props.onChangeHandler}
                    onClick={this.onClickHandler}
                  />
                </div>
              </div>

              <div
                className={styles.repoListHolder}
                onClick={this.hideInputFocus}
              >
                <div className={styles.repoList}>
                  {finalRepoArr &&
                    finalRepoArr.map((m, i) => {
                      let actual = 0;
                      let currentDate = new Date(m.updated_at);
                      let todayDate = new Date();
                      var Difference_In_Time =
                        todayDate.getTime() - currentDate.getTime();
                      var Difference_In_Days = parseInt(
                        Difference_In_Time / (1000 * 3600 * 24)
                      );
                      actual = Difference_In_Days;
                      if (Difference_In_Days > 30) {
                        console.log(currentDate.getDate());
                        console.log(currentDate.getMonth());
                        console.log(currentDate.getFullYear());

                        actual =
                          currentDate.getDate() +
                          " " +
                          months[currentDate.getMonth()] +
                          " " +
                          currentDate.getFullYear();
                      }

                      return (
                        <div className={styles.repoRow} key={i}>
                          <div className={styles.repoRowLeft}>
                            <div className={styles.repoRowLeftTop}>
                              {m.name}
                            </div>
                            <div className={styles.repoRowForked}>
                              Forked From {m.homepage}
                            </div>
                            <div className={styles.repoRowLeftDescription}>
                              {m.description}
                            </div>
                            <div className={styles.repoRowLeftBottom}>
                              <div>
                                <span
                                  className={
                                    m && m.language === "CSS"
                                      ? styles.statusCircleInCSS
                                      : m && m.language === "JavaScript"
                                      ? styles.statusCircleInJavaScript
                                      : m && m.language === "HTML"
                                      ? styles.statusCircleInHTML
                                      : null
                                  }
                                ></span>
                                {m.language}
                              </div>
                              <div>{m.license && m.license.spdx_id}</div>
                              <div
                                id={m && m.language ? null : styles.udpatedDays}
                              >
                                Updated {actual} ago
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
