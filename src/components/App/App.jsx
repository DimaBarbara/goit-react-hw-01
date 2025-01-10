import React from "react";
import Profile from "../Profile/Profile";
import userData from "../Profile/userData.json";
import friends from "../FriendList/friends.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../Transaction/TransactionHistory";
import transactions from "../Transaction/transactions.json";
import "./App.css"

export default function App() {
  return (
    <>
      <h1>Task 1</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h1>Task 2</h1>
      <FriendList friends={friends} />
      <h1>Task 3</h1>
      <TransactionHistory items={transactions}/>
    </>
  );
};


