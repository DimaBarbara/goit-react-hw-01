import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"; // Імпорт CSS-модуля

export default function FriendList({ friends }) {
  return (
    <ul className={styles.ulFriendList}> {/* Використання класу з модуля */}
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.liFriendList} key={id}> {/* Використання локального класу */}
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}



