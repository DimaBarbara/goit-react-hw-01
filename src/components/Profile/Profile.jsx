import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css"; // Імпорт CSS-модуля

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img
          src={image}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

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

