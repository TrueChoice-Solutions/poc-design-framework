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

/**
 * @description - returns Timeline component
 * @param {string} props.text - the text to show which section the user is on
 * @param {string} props.progressBarClassName - bootstrap class names that can style the progress bar
 * @param {string} props.progressBarValue - value to set the progress bar percentage
 * @return {jsx} - the Timeline component to render
 */
const Timeline = ({ text, progressBarClassName, progressBarValue }) => {
  return (
    <div className="w-100">
      <div>{text}</div>
      <div className="clearfix">
        <div
          className={`progress ${progressBarClassName}`}
          style={{ height: '0.5rem' }}
        >
          <div
            className={`progress-bar w-${progressBarValue}`}
            role="progressbar"
            aria-valuenow={progressBarValue}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
