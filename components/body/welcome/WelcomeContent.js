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
import Headline from '../Headline';
import WelcomeCta from './WelcomeCta';

/**
 * @description - returns Welcome main body content
 * @return {jsx} - the Welcome component to render
 */
const WelcomeContent = () => {
  return (
    <Container fluid>
      <Container>
        <Row className="vh-100 min-vh-100 align-items-center text-light">
          <Col>
            <Headline h1Text="What Matters to You!">
              <h2>Share your preferences and perspectives with us.</h2>
            </Headline>
            <WelcomeCta
              estimateText="It takes less than 5 minutes"
              buttonLink="/levels"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeContent;
