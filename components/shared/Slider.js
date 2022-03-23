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
 * @param {string} props.sliderClassName - bootstrap class names for general slider layout
 * @param {string} props.displayValueClassName - bootstrap class names for display value
 * @param {function} props.handleInputChange - on change event handler
 * @param {string} props.name - name to group the inputs into a category
 * @param {string} props.value - what the slider is currently on
 * @param {string} props.minValue - slider value lowest point
 * @param {string} props.maxValue - slider value highest point
 * @param {string} props.orient - sets slider to vertical position
 * @return {jsx} - the Slider component to render
 */
const Slider = ({
  sliderClassName,
  displayValueClassName,
  handleInputChange,
  name,
  value,
  minValue,
  maxValue,
  orient
}) => {
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
        value={value}
        min={minValue}
        max={maxValue}
        /* if orient is set to any truthy value, add 'vertical' */
        orient={orient && 'vertical'}
      />
      <div className={displayValueClassName}>{value}</div>
    </div>
  );
};

export default Slider;
