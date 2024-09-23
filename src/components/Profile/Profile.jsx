import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles["box-profile"]}>
      <div className={styles["photo-box"]}>
        <img
          className={styles["photo-profile"]}
          src={image}
          alt="User avatar"
        />
        <p className={styles["name-profile"]}>{name}</p>
        <p className={styles["tag-profile"]}>@{tag}</p>
        <p className={styles["location-profile"]}>{location}</p>
      </div>

      <ul>
        <li className={styles["list-item"]}>
          <span className={styles["stats-names"]}>Followers</span>
          <span className={styles["followers-number"]}>{stats.followers}</span>
        </li>
        <li className={styles["list-item"]}>
          <span className={styles["stats-names"]}>Views</span>
          <span className={styles["followers-number"]}>{stats.views}</span>
        </li>
        <li className={styles["list-item"]}>
          <span className={styles["stats-names"]}>Likes</span>
          <span className={styles["followers-number"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
