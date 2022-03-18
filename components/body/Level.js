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
import styles from './Level.module.css';
import Tooltip from '../shared/Tooltip';

/**
 * @description - returns icon, tooltip, text, and range slider
 * @param {jsx} props.icon - Bootstrap icon
 * @param {string} props.text - text to display
 * @param {jsx} props.tooltipContent - Tooltip content to display
 * @return {jsx} - the Level component to render
 */
const Level = ({ icon, text, tooltipContent }) => {
  return (
    <div>
      {/* screen < 576px display ONLY small screen content */}
      <div className={`${styles.smallScreenContent} border p-2`}>
        <div className="border border-primary d-flex align-items-center">
          <Tooltip
            contentClassName="bg-dark p-3 text-center"
            contentAbsoluteStartingPosition="left"
          >
            {tooltipContent}
          </Tooltip>
          <span className="ms-2">{text}</span>
        </div>
        {'Slider component goes here < 768px'}
      </div>
      {/* screen > 576px display ONLY big screen content */}
      <div className={`${styles.regularScreenContent} p-2 text-center`}>
        <div className="position-relative d-inline-block">
          {icon}
          <div
            className="position-absolute top-100 start-100 translate-middle ms-3"
            style={{ zIndex: '1' }}
          >
            <Tooltip contentClassName="bg-dark p-3 text-center">
              {tooltipContent}
            </Tooltip>
          </div>
        </div>

        <div className="mt-3 border">{text}</div>
        {'Slider component goes here >= 768px'}
      </div>
    </div>
  );
};

export default Level;

/*
 * make text equal height on medium+ screens
 * create a range slider for each level
 */
