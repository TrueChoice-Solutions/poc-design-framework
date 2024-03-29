/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { useState } from 'react';
// local files

/**
 * @description - returns input slider
 * @param {string} props.sliderClassName - bootstrap class names for general slider layout
 * @param {string} props.displayValueClassName - bootstrap class names for display value
 * @param {string} props.name - name to group the inputs into a category
 * @param {string} props.minValue - slider value lowest point
 * @param {string} props.maxValue - slider value highest point
 * @param {string} props.orient - sets slider to vertical position
 * @return {jsx} - the Slider component to render
 */
const Slider = ({
  sliderClassName,
  displayValueClassName,
  name,
  minValue,
  maxValue,
  orient
}) => {
  // state
  const [inputValue, setInputValue] = useState(getDefaultInputValue());

  // event handlers
  /**
   * @description - stores input range value into 'inputValue' state
   * @param {object} event - get user's value from interacting with range slider
   */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // helper functions
  /**
   * @description - median of maxValue & minValue; sets default slider starting point
   * @return {string} - return median as string if integer. Return median rounded down as string if float.
   */
  // changed from arrow function (expression) to declaration. Reason: hoisting. Arrow functions are NOT hoisted!
  function getDefaultInputValue() {
    // midpoint should be (max + min) / 2 to get median
    const MIDPOINT = (Number(maxValue) + Number(minValue)) / 2;
    // check if integer
    // 6 - 10 (should be 8)
    if (MIDPOINT % 1 === 0) {
      return MIDPOINT;
    } else {
      // check if float (decimal). Round down to nearest integer
      // 1 - 10 (5.5 should be 5)
      const MIDPOINT_ROUNDED_DOWN = Math.floor(MIDPOINT);
      return MIDPOINT_ROUNDED_DOWN;
    }
  }

  return (
    /*
     * storing input & input value display here for now - Later will refactor to only be input.
     * Also, delete display value in future => will be on range's thumb
     */
    <div className={sliderClassName}>
      <input
        className="w-75"
        type="range"
        onChange={handleInputChange}
        name={name}
        value={inputValue}
        min={minValue}
        max={maxValue}
        /* if orient is set to any truthy value, add 'vertical' */
        orient={orient && 'vertical'}
      />
      <div className={displayValueClassName}>{inputValue}</div>
    </div>
  );
};

export default Slider;
