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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// local files
import styles from './Timeline.module.css';

/**
 * @description - returns Timeline component
 * @param {string} props.text - the text to show which section the user is on
 * @return {jsx} - the Timeline component to render
 */
const Timeline = ({ text }) => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <div className={styles.row}>{text}</div>
        </Col>
      </Row>
      <Row>
        <Col className={styles.progressBars}>
          <div className={styles.longProgressBar}></div>
          <div className={styles.shortProgressBar}></div>
          <div className={styles.shortProgressBar}></div>
          <div className={styles.shortProgressBar}></div>
          <div className={styles.shortProgressBar}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
