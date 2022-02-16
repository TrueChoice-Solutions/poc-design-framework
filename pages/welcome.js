/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import Container from 'react-bootstrap/Container';
// local files
import styles from './welcome.module.css';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome Page to render
 */
const Welcome = () => {
  return (
    <main className={styles.welcomePage}>
      <Container className={styles.container}></Container>
    </main>
  );
};

export default Welcome;
