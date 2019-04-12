import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.props.friends,
      name: "",
      age: 0,
      id: "",
      email: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      age: this.state.age,
      id: Date.now(),
      email: this.state.email,
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();

    this.props.addFriend({
      age: this.state.age,
      id: this.state.friends.length,
      email: this.state.email,
      name: this.state.name
    });

    this.setState({
      age: 0,
      email: "",
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Add a new buddy"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={this.handleChange}
              value={this.state.age}
            />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addFriend }
)(AddFriendForm);
