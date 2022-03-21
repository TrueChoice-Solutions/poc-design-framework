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
 * @param {text} props.text - Timeline text to show which section the user is on
 * @param {text} props.progressBarValue - Timeline value to set the progress bar percentage
 * @return {jsx} - the Header component to render
 */
const Header = ({ text, progressBarValue }) => {
  return (
    <Container fluid className="position-absolute">
      <Container>
        <Row className="text-light align-items-center pt-2">
          <Col md={6}>
            <Logo
              imageSrc="logo.png"
              altText="TrueChoice Logo"
              linkSrc="https://www.truechoice.io"
              imageWidth={200}
              imageHeight={33.33}
            />
          </Col>
          <Col md={6} className="text-md-end">
            <Timeline
              text={text}
              progressBarClassName="float-md-end w-25"
              progressBarValue={progressBarValue}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
