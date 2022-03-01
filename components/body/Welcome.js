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
import Button from '../shared/Button';

/**
 * @description - returns Welcome component
 * @param {string} props.h1Text - h1 text
 * @param {string} props.h2Text - h2 text
 * @return {jsx} - the Welcome component to render
 */
const Welcome = ({ h1Text, h2Text }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row vh-100 min-vh-100 align-items-center text-light">
          <div className="col">
            {/* component */}
            <h1 className="display-2 fw-bolder">{h1Text}</h1>
            <h2 className="fw-bolder">{h2Text}</h2>
            <hr />
            {/* ---------- */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="col col-7 col-sm d-flex align-items-center">
                {/* component */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-circle-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                  </svg>
                </div>
                <span className="ms-3">It takes less than 5 minutes</span>
              </div>
              <Button
                text="Get Started"
                bgColor="btn-danger"
                textColor="text-white"
                outline="btn-danger"
              />
            </div>
            {/* ---------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
