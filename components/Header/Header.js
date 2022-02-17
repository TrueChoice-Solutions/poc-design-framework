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
import styles from './Header.module.css';
import Logo from '../shared/Logo';
import Timeline from '../shared/Timeline';

/**
 * @description - returns Header component
 * @return {jsx} - the Header component to render
 */
const Header = () => {
  return (
    <section className={styles.header}>
      <Container>
        <Row className={styles.row}>
          <Col md={6} xl={8}>
            <Logo imageSrc="logo.png" altText={'TrueChoice Logo'} />
          </Col>
          <Col md={6} xl={4}>
            <Timeline text="Welcome" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
