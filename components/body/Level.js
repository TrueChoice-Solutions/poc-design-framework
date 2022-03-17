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
 * @return {jsx} - the Level component to render
 */
const Level = ({ icon }) => {
  return (
    <div className="border">
      <div className="icon">{icon}</div>
      <div>Level</div>
      <div>Slider component goes here</div>
    </div>
  );
};

export default Level;

/* pass in text as props
 * add text & icon params to description
 * work on layout - mobile vs desktop (mobile-first!)
 */
