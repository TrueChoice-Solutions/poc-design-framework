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
import WelcomeCta from './WelcomeCta';

/**
 * @description - returns Welcome component
 * @param {string} props.h1Text - h1 text
 * @param {string} props.h2Text - h2 text
 * @return {jsx} - the Welcome component to render
 */
const Welcome = ({ h1Text, h2Text }) => {
  return (
    <Container fluid>
      <Container>
        <Row className="vh-100 min-vh-100 align-items-center text-light">
          <Col>
            {/* component */}
            <h1 className="display-2 fw-bolder">{h1Text}</h1>
            <h2 className="fw-bolder">{h2Text}</h2>
            <hr />
            {/* ---------- */}
            <WelcomeCta />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Welcome;
