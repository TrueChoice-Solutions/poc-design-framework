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
 * @return {jsx} - the Welcome Cta to render
 */

//  <svg
//  xmlns="http://www.w3.org/2000/svg"
//  width="24"
//  height="24"
//  fill="currentColor"
//  className="bi bi-circle-half"
//  viewBox="0 0 16 16"
// >
//  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
// </svg>
const WelcomeCta = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <Col xs={7} sm className="d-flex align-items-center">
        <div>
          <Clock size={24} />
        </div>
        <span className="ms-3">It takes less than 5 minutes</span>
      </Col>
      <Button
        text="Get Started"
        bgColor="btn-danger"
        textColor="text-white"
        outline="btn-danger"
      />
    </div>
  );
};

export default WelcomeCta;
