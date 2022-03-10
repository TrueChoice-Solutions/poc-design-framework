/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { Container, Row, Col } from 'react-bootstrap';
// local files
import Logo from '../shared/Logo';
import Timeline from '../shared/Timeline';

/**
 * @description - returns Header component
 * @return {jsx} - the Header component to render
 */
const Header = () => {
  return (
    <Container fluid className="position-absolute">
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
          <Col sm={6} className="text-sm-end">
            <Timeline
              text="Welcome"
              progressBarClassName="float-sm-end w-25"
              progressBarValue="25"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
