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
import styles from './Body.module.css';
import Welcome from './Welcome';

/**
 * @description - returns Body component
 * @return {jsx} - the Body component to render
 */
const Body = () => {
  return (
    // <section className={styles.body}>
    //   <div className={styles.content}>
    //     <Welcome
    //       h1Text="What matters to you?"
    //       h2Text="Share your preferences and perspectives with us."
    //     />
    //   </div>
    // </section>

    <Container fluid>
      <Row className={`align-items-center ${styles.body}`}>
        <Col>
          <h1>What Matters to You!</h1>
          Share your preferences and perspectives with us.
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
