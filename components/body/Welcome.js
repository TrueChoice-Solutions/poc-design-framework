/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// local files
import styles from './Welcome.module.css';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome component to render
 */
const Welcome = ({ h1Text, h2Text }) => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.h1}>{h1Text}</h1>
      <h2 className={styles.h2}>{h2Text}</h2>
    </div>
  );
};

export default Welcome;
