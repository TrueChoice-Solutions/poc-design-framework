/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
// local files
import styles from './Welcome.module.css';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome component to render
 */
const Welcome = ({ h1Text, h2Text }) => {
  return (
    <div className={`container-fluid ${styles.outer}`}>
      <div className="container">
        <div className="row vh-100 min-vh-100 align-items-center">
          <div className="col">
            <h1 className="display-2 fw-bolder">{h1Text}</h1>
            <h2 className="fw-bolder">{h2Text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
