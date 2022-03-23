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
 * @param {string} props.sliderClassName - bootstrap class names for slider
 * @param {function} props.handleInputChange - on change event handler
 * @param {string} props.value - what the slider is currently on
 * @return {jsx} - the Slider component to render
 */
const Slider = ({
  sliderClassName,
  handleInputChange,
  minValue,
  maxValue,
  value
}) => {
  return (
    /*
     * storing input & input value display here for now - Later will delete
     * the display value, since we'll have it display on the range's thumb
     */
    <div className={sliderClassName}>
      <input
        className="w-75"
        type="range"
        min={minValue}
        max={maxValue}
        name="input-number"
        onChange={handleInputChange}
        value={value}
      />
      <div className="ms-4">{value}</div>
    </div>
  );
};

export default Slider;
