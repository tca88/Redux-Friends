import React, { Component } from "react";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";
import { getFriends, login, addFriend } from "../actions";
import AddFriendForm from "./AddFriendForm";

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
        <AddFriendForm friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    isFetching: state.friendsReducer.isFetching,
    friend: state.friendsReducer.friend
  };
};

export default connect(
  mapStateToProps,
  {
    getFriends,
    login,
    addFriend
  }
)(FriendsListView);
