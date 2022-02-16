// dependencies
// local files
import styles from './Timeline.module.css';

const Timeline = ({ text }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.text}>{text}</div>
      <div className={styles.bar}>
        <div className={styles.newLine}></div>
        <div className={styles.newLine}></div>
      </div>
    </div>
  );
};

export default Timeline;
