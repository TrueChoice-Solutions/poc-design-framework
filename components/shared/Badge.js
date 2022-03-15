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
 * @description - returns Badge component
 * @param {string} props.className - bootstrap class names to style badge
 * @param {string} props.text - Badge text to display
 * @return {jsx} - the Badge component to render
 */
const Badge = ({
  className = 'bg-primary rounded-pill d-inline-block px-2',
  text = 'Badge'
}) => {
  return (
    <div>
      <div className={className}>{text}</div>
    </div>
  );
};

export default Badge;
