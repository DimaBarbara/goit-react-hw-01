import React from "react";
import PropTypes from "prop-types";


export default function FriendListItem ({ avatar, name, isOnline })  {
    return (
         <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p style={{color: isOnline ? "green" : "red"}} >{isOnline ? "Online" : "Offline"}</p>
</div>

     )
}
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};