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
 * @description - h1, h2 (optional), and hr line
 * @param {string} props.h1Text - h1 text
 * @param {string} props.h2Text - h2 text
 * @return {jsx} - the Headline component to render
 */
const Headline = ({ h1Text, children }) => {
  return (
    <div>
      <h1 className="display-2 fw-bolder">{h1Text}</h1>
      {children}
      <hr />
    </div>
  );
};

export default Headline;
