import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import socketIOClient from "socket.io-client";
import Landing from "./components/Landing";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import store from "./store";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import UserContent from "./UserContent";

class App extends Component {
  state = {
    response: false,
    endpoint: "http://127.0.0.1:5009",
    userContent: new UserContent(this)
  };

  componentDidMount() {
    // const { endpoint } = this.state;
    // const socket = socketIOClient(endpoint);
    // socket.on("FromAPIs", data => this.setState({ response: data }));

    // Check if the user is already present in localstorage
    // if yes, then authenticate the user
    if (localStorage.authToken) {
      // Set auth token header auth
      setAuthToken(localStorage.authToken);
      //Decode the tokens ang get user infe ormation
      const decodedToken = jwt_decode(localStorage.authToken);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decodedToken));
      //Check for expired tokens
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        // log out user
        store.dispatch(logoutUser());
        // Redirect to login
        window.alert("Session expired, please login again.");
        window.location.href = "/login";
      }
    }
    console.log(this.state.userContent)
  }
  render() {
    const { response, userContent } = this.state;
    return (
      <div className="app">
        <Provider store={store}>
          <Router>
            <Route
              exact
              path="/"
              render={() => <Landing userContent={userContent} />}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
