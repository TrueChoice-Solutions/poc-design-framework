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
import Logo from '../shared/Logo';
import Timeline from '../shared/Timeline';

/**
 * @description - returns Header component
 * @return {jsx} - the Header component to render
 */
const Header = () => {
  return (
    <Container fluid className="border position-absolute">
      <Container>
        <Row className="text-light align-items-center pt-2">
          <Col sm={6}>
            <Logo
              imageSrc="logo.png"
              altText="TrueChoice Logo"
              linkSrc="https://www.truechoice.io"
              imageWidth={200}
              imageHeight={33.33}
            />
          </Col>
          <Col sm={6} className="d-flex justify-content-sm-end">
            <Timeline text="Welcome" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
