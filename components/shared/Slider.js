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
 * @description - returns input slider
 * @param {function} props.handleInputChange - on change event handler
 * @param {string} props.value - what the slider is currently on
 * @return {jsx} - the Slider component to render
 */
const Slider = ({ handleInputChange, value, className = 'w-100' }) => {
  return (
    <input
      type="range"
      min="1"
      max="10"
      className={className}
      name="input-number"
      onChange={handleInputChange}
      value={value}
    />
  );
};

export default Slider;
