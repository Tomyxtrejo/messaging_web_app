import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import socketIOClient from "socket.io-client";
import Landing from "./components/Landing"

class App extends Component {


    state = {
      response: false,
      endpoint: "http://127.0.0.1:5009"
    };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPIs", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
          <div className="app">
            <Router>
              <Route exact path = "/" render ={() => <Landing />} />
            </Router>


          </div>
    )
  }
}
export default App;
