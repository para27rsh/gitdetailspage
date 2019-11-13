import React from "react";
import "./App.css";
import Loadable from "react-loadable";
import Loader from "./component/Loader";
// import UserCardContainer from "./containers/UserCardContainer";

const UserCardContainer = Loadable({
  loader: () => import("./containers/UserCardContainer"),
  loading() {
    return <Loader />;
  }
});
function App() {
  return (
    <div className="App">
      <UserCardContainer></UserCardContainer>
    </div>
  );
}

export default App;
