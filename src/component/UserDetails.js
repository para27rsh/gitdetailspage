import React, { Component } from "react";
import styles from "./UserDetails.module.css";
import Loader from "./Loader.js";
export default class UserDetails extends Component {
  componentDidMount() {
    let user =
      this.props &&
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.state &&
      this.props.history.location.state.user;
    this.props.searchUserRepo(user);
  }
  onRedirect = val => {
    window.open(val);
  };
  render() {
    console.log(this.props.userRepoDetails);
    const image =
      this.props &&
      this.props.userRepoDetails &&
      this.props.userRepoDetails[0] &&
      this.props.userRepoDetails[0].owner &&
      this.props.userRepoDetails[0].owner.avatar_url;
    const name =
      this.props &&
      this.props.userRepoDetails &&
      this.props.userRepoDetails[0] &&
      this.props.userRepoDetails[0].owner &&
      this.props.userRepoDetails[0].owner.login;
    return (
      <React.Fragment>
        {this.props && this.props.loader && <Loader />}
        <div className={styles.base}>
          {this.props &&
          this.props.userRepoDetails &&
          this.props.userRepoDetails.length > 0 ? (
            <div className={styles.detailsHolder}>
              <div className={styles.descriptionHolder}>
                <div className={styles.imageAndName}>
                  {image && (
                    <div className={styles.imageHolder}>
                      <img src={image} alt="" />
                    </div>
                  )}
                  <div className={styles.nameOfUser}>{name}</div>
                </div>
                <div className={styles.dataAndLink}>
                  {this.props &&
                    this.props.userRepoDetails &&
                    this.props.userRepoDetails.map((val, i) => {
                      return (
                        <div
                          className={styles.repoAndLink}
                          onClick={() => this.onRedirect(val.html_url)}
                        >
                          <div className={styles.repoName}>{val.name}</div>
                          <div className={styles.link}>{val.html_url}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.notFound}>No Repository Found</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
