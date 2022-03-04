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
import Headline from './Headline';
import WelcomeCta from './WelcomeCta';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome component to render
 */
const Welcome = () => {
  // h1Text="What Matters to You!"
  // h2Text="Share your preferences and perspectives with us."
  return (
    <Container fluid>
      <Container>
        <Row className="vh-100 min-vh-100 align-items-center text-light">
          <Col>
            {/* component */}
            <Headline
              h1="What Matters to You!"
              h2Text="Share your preferences and perspectives with us."
            />
            {/* ---------- */}
            <WelcomeCta estimateText="It takes less than 5 minutes" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Welcome;
