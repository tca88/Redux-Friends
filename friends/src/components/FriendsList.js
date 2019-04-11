import React from "react";

import Friend from "./Friend";

const FriendsList = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map(friend => {
        console.log("hi friend", friend);
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
