/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import Col from 'react-bootstrap/Col';
import { Clock } from 'react-bootstrap-icons';
// local files
import Button from '../shared/Button';

/**
 * @description - section for icon, time estimation text, and button
 * @param {string} props.estimateText - time estimation text
 * @param {string} props.buttonText - button's text
 * @return {jsx} - the Welcome Cta to render
 */
const WelcomeCta = ({ estimateText, buttonText }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <Col xs={7} sm className="d-flex align-items-center">
        <Clock size={24} />
        <span className="ms-3">{estimateText}</span>
      </Col>
      <Button
        text={buttonText}
        bgColor="btn-danger"
        textColor="text-white"
        outline="btn-danger"
      />
    </div>
  );
};

export default WelcomeCta;
