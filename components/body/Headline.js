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
 * @description - h1, additional jsx, and hr line
 * @param {string} props.h1Text - h1 text
 * @param {string} props.children - any jsx elements
 * @return {jsx} - the Headline component to render
 */
const Headline = ({ h1Text = 'What Matters to You!', children }) => {
  return (
    <div>
      <h1 className="display-2 fw-bolder">{h1Text}</h1>
      {children}
      <hr />
    </div>
  );
};

export default Headline;
