import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles["head-name"]}>Type</th>
          <th className={styles["head-name"]}>Amount</th>
          <th className={styles["head-name"]}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles["table-body"]}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={styles["table-item"]}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
