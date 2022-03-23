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
 * @param {string} props.name - name to group the inputs into a category
 * @param {string} props.value - what the slider is currently on
 * @param {string} props.minValue - slider value lowest point
 * @param {string} props.maxValue - slider value highest point
 * @return {jsx} - the Slider component to render
 */
const Slider = ({
  sliderClassName,
  handleInputChange,
  name,
  value,
  minValue,
  maxValue
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
        onChange={handleInputChange}
        name={name}
        value={value}
        min={minValue}
        max={maxValue}
      />
      <div className="ms-4">{value}</div>
    </div>
  );
};

export default Slider;
