import React from "react";

import Friend from "./Friend";

const FriendsList = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map(friend => {
        return <Friend key={friend.name} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
