import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  if (props.items.length === 0)
    return <div className="center"> No Users Found..</div>;
  else
    return (
      <ul className="users-list">
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places.length}
          />
        ))}
      </ul>
    );
};

export default UserList;
