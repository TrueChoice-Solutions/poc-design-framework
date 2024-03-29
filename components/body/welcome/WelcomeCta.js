/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { Col, Button } from 'react-bootstrap';
import { Clock } from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
// local files

/**
 * @description - section for icon, time estimation text, and button
 * @param {string} props.estimateText - time estimation text
 * @param {jsx} props.icon - Bootstrap icon component name and any additional styling
 * @param {string} props.buttonText - button's text
 * @param {string} props.buttonLink - button link
 * @return {jsx} - the Welcome Cta to render
 */
const WelcomeCta = ({
  estimateText,
  icon = <Clock size="24" />,
  buttonText = 'Get Started',
  buttonLink
}) => {
  // useRouter
  const router = useRouter();

  // event handlers
  /**
   * @description - Button on click event handler, takes user to link
   */
  const handleButtonClick = () => {
    router.push(`${buttonLink}`);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <Col xs={7} sm className="d-flex align-items-center">
        {icon}
        <span className="ms-3">{estimateText}</span>
      </Col>
      <Button variant="danger" onClick={handleButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default WelcomeCta;
