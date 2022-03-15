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
import Badge from '../shared/Badge';

/**
 * @description - returns Level One main body content
 * @return {jsx} - the Levels One component to render
 */
const LevelsOne = () => {
  return (
    <Container fluid>
      <Container>
        <Row className="vh-100 min-vh-100 align-items-center text-light">
          <Col>
            <Badge text="Category Label" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LevelsOne;
