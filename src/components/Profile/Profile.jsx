import React from "react";
import PropTypes from "prop-types";

export default function Profile ({ name, tag, location, image, stats }) {
  return (
    <div style={styles.profileContainer}>
      <div style={styles.userInfo}>
        <img
          src={image}
          alt="User avatar"
          style={styles.avatar}
        />
        <p style={styles.name}>{name}</p>
        <p style={styles.tag}>@{tag}</p>
        <p style={styles.location}>{location}</p>
      </div>
      <ul style={styles.stats}>
        <li style={styles.statItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li style={styles.statItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li style={styles.statItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

const styles = {
  profileContainer: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "300px",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  userInfo: {
    padding: "20px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  tag: {
    color: "gray",
  },
  location: {
    color: "gray",
  },
  stats: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderTop: "1px solid #ccc",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

