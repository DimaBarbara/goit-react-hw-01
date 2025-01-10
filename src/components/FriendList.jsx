import FriendListItem from "./FriendListItem";
import "./FriendList.css"

export default function FriendList ({ friends }) {
    return (
        <ul className="ul-friendList" >
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li className="li-friendList" key={id}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
</ul>
    );
};



