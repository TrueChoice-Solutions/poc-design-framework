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
 * @param {string} props.text - the text to show which section the user is on
 * @return {jsx} - the Timeline component to render
 */
const Timeline = ({ text }) => {
  return (
    <div>
      <div className={styles.row}>{text}</div>
      <div className="d-flex">
        <span className={styles.longProgressBar}></span>
        <span className={styles.shortProgressBar}></span>
        <span className={styles.shortProgressBar}></span>
        <span className={styles.shortProgressBar}></span>
        <span className={styles.shortProgressBar}></span>
      </div>
    </div>
  );
};

export default Timeline;
