import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./reducers/user.reducer";
import repoReducers from "./reducers/repo.reducer";
import thunk from "redux-thunk";
import App from "./App";
const rootReducer=combineReducers({
  userReducer,
  repoReducers
});
const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = creatStoreWithMiddleware(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
