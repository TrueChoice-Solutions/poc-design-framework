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
 * @description - returns icon, tooltip, text, and range slider
 * @param {jsx} props.icon - Bootstrap icon
 * @param {string} props.text - text to display
 * @return {jsx} - the Level component to render
 */
const Level = ({ icon, text }) => {
  return (
    <div className="border">
      <div className="icon">{icon}</div>
      <div>{text}</div>
      <div>Slider component goes here</div>
    </div>
  );
};

export default Level;

/*
 * work on layout - mobile vs desktop (mobile-first!)
 */
