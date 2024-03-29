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
import styles from './LevelsContent.module.css';
import Tooltip from '../../shared/Tooltip';
import Badge from '../../shared/Badge';
import Headline from '../Headline';
import Level from './Level';

/**
 * @description - returns Level One main body content
 * @param {object} props.attribute - JSON properties containing specific attribute data
 * @return {jsx} - the Levels One component to render
 */
const LevelsContent = ({ attribute }) => {
  // render content
  /**
   * @description - maps over each level and displays the icon, text, & tooltip content
   * @return {jsx} - Level component wrapped in Bootstrap Column
   */
  const renderLevels = () => {
    return attribute.levels.map((level) => (
      <Col key={level.levelId} md={2}>
        <Level levelData={level} />
      </Col>
    ));
  };

  return (
    <Container fluid>
      <Container>
        <Row
          className={`position-relative align-items-center text-light ${styles.row}`}
        >
          <Col>
            <div className="d-flex align-items-center position-relative z-index-top">
              <Tooltip
                contentClassName="bg-dark p-3 text-center"
                contentAbsoluteStartingPosition="left"
              >
                <p className="mb-0">{attribute.tooltipText}</p>
              </Tooltip>
              <Badge
                className="bg-primary d-inline-block rounded-pill px-2 ms-3"
                text={attribute.name}
              />
            </div>
            <div className="mt-3">
              <Headline h1Text={attribute.displayName} h1ClassName="fw-bolder">
                <p className="mb-0 pt-2">{attribute.instructions}</p>
              </Headline>
            </div>

            <Row>{renderLevels()}</Row>

            {/* Added div here so main content
             * isn't blocked by footer, has space to scroll to view all body content
             */}
            <div className={styles.marginDiv}></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LevelsContent;
