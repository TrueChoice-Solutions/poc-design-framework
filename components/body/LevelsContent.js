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
import {
  PersonCheck,
  Basket,
  Diagram3,
  HeartHalf,
  PersonWorkspace,
  HddNetwork
} from 'react-bootstrap-icons';
// local files
import Tooltip from '../shared/Tooltip';
import Badge from '../shared/Badge';
import Headline from './Headline';
import Level from './Level';

/**
 * @description - returns Level One main body content
 * @return {jsx} - the Levels One component to render
 */
const LevelsContent = () => {
  return (
    <Container fluid>
      <Container>
        <Row
          style={{
            top: '9.375rem'
          }}
          className="position-relative w-100 h-100 align-items-center text-light"
        >
          <Col>
            <div className="d-flex align-items-center">
              <Tooltip
                contentClassName="bg-dark p-3 text-center"
                contentAbsoluteStartingPosition="left"
              >
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
            <div className="mt-3">
              <Headline
                h1Text="Which of these work / life balance factors matters most to you?"
                h1ClassName="fw-bolder"
              >
                <p className="mb-0 pt-2">
                  For each of the categories below, rate the item from 0-10 to
                  tell us how important that category is, compared to the
                  others.
                </p>
              </Headline>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <Level
                icon={<PersonCheck size={30} />}
                text="Employee assistance programs"
              />
              <Level
                icon={<Basket size={30} />}
                text="Absence management and occupational health"
              />
              <Level icon={<Diagram3 size={30} />} text="Child care" />
              <Level icon={<HeartHalf size={30} />} text="Stress management" />
              <Level
                icon={
                  <PersonWorkspace
                    size={30}
                    text="Flexible and remote working"
                  />
                }
              />
              <Level
                icon={<HddNetwork size={30} />}
                text="Workstation assessments"
              />
            </div>

            <div style={{ marginTop: '200px' }}></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LevelsContent;
