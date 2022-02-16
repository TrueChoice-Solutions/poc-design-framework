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

/**
 * @description - returns Header component
 * @return {jsx} - the Header component to render
 */
const Header = () => {
  return (
    <section className={styles.header}>
      <Container>
        <Row>
          <Col sm={6}>
            <Logo />
          </Col>
          <Col sm={6}>Dude</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
