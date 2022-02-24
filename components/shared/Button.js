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
 * @return {jsx} - the Button component to render
 */
const Button = ({ text, bgColor, textColor, outline }) => {
  // helper functions
  return (
    <button type="button" className={`btn ${bgColor} ${textColor} ${outline}`}>
      {text}
    </button>
  );
};

export default Button;
