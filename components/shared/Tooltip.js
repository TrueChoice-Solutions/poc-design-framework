/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

const Tooltip = () => {
  return (
    <div>
      <div>Tooltip</div>
    </div>
  );
};

export default Tooltip;

/* add dependencies/local files
 * add @description for Tooltip component
 * Tooltip icon (pass as props or default icon?)
 * setup onClick handler to toggle window (same as helpchat)
 * takes in children, which can be image / video, or p tags (different than codesandbox! Let children take in p tags!)
 * if time, set up so on left most, box will go to right and vice versa. On middle, should be straight down middle
 */
