/* eslint-disable max-len */
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
import Image from 'next/image';
// local files
import Tooltip from '../shared/Tooltip';
import Badge from '../shared/Badge';

/**
 * @description - returns Level One main body content
 * @return {jsx} - the Levels One component to render
 */
const LevelsContent = () => {
  return (
    <Container fluid>
      <Container>
        <Row className="vh-100 min-vh-100 align-items-center text-light">
          <Col>
            <div className="d-flex align-items-center border">
              <Tooltip
                contentClassName="bg-dark p-3 text-center"
                contentAbsoluteStartingPosition="left"
              >
                <Image
                  className="mb-3"
                  src="https://media.istockphoto.com/photos/torn-paper-with-word-are-you-covered-picture-id1327364098?s=612x612"
                  alt="random"
                  layout="responsive"
                  width="100"
                  height="100"
                />
                <video
                  className="mb-3"
                  width="100%"
                  height="100%"
                  muted
                  controls
                  src="https://static.videezy.com/system/resources/previews/000/038/595/original/alb_lightfx2072_1080p.mp4"
                ></video>
                <p className="mb-0">
                  Benefits that help support achieving a more optimal balance
                  between work obligations and your other needs / obligations.
                </p>
              </Tooltip>
              <Badge
                className="bg-primary d-inline-block rounded-pill px-2 ms-3"
                text="Work / Life Balance"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LevelsContent;
