import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsListView from "./components/FriendsListView";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink className="nav-links" to="/friends">
              Friends
            </NavLink>
          </nav>

          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendsListView} />
        </div>
      </Router>
    );
  }
}

export default App;
