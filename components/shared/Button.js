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
 * @description - returns Button component
 * @param {string} props.text - the button's text
 * @param {string} props.bgColor - the button's background color
 * @param {string} props.textColor - the button's font color
 * @param {string} props.outline - the button's outline color
 * @param {function} props.onClick - on click event handler to run after button is clicked
 * @return {jsx} - the Button component to render
 */
const Button = ({ text, bgColor, textColor, outline, onClick }) => {
  // helper functions
  return (
    <button
      type="button"
      className={`btn ${bgColor} ${textColor} ${outline}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
