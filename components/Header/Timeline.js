/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
// local files
import styles from './Timeline.module.css';

/**
 * @description - returns Timeline component
 * @param {string} - the text to display
 * @return {jsx} - the Timeline to render
 */
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
