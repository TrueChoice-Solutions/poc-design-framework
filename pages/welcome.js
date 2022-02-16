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
import Button from 'react-bootstrap/Button';
// local files
import styles from './welcome.module.css';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome Page to render
 */
const Welcome = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={3}>1 of 12</Col>
        <Col xs={3}>1 of 12</Col>
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
      </Row>
    </Container>
  );
};

export default Welcome;
