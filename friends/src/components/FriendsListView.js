import React, { Component } from "react";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";
import { getFriends, login } from "../actions";

class FriendsListView extends Component {
  componentDidMount() {
    this.props.getFriends();
    console.log(this.props.friends);
  }

  logout = event => {
    localStorage.removeItem("token");
    document.location.reload();
  };

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      console.log("data is being fetched!");
    }
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    isFetching: state.friendsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    getFriends,
    login
  }
)(FriendsListView);
