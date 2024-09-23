import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.box}>
      <img src={avatar} alt="Avatar" width="80" />
      <p className={styles.name}>{name}</p>
      <p className={styles[isOnline ? "online" : "offline"]}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
