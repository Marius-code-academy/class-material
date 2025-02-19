import styles from "./StackingContextExample.module.css";

export default function StackingContextExample() {
  return (
    <div>
      {/* 100 */}
      <div className={styles.div1}>labas</div>
      {/* 50 */}
      <div className={styles.div2}>
        {/* 1000 */}
        <div className={styles.div2Inner}>alsdkjfha</div>
      </div>
    </div>
  );
}
