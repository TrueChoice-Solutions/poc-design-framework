/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { InfoCircle } from 'react-bootstrap-icons';
// local files

/**
 * @description - Tooltip icon. On click, opens a little text window
 * @returns {jsx} - the Tooltip component to render
 */
const Tooltip = () => {
  return (
    <div className="border">
      <div>
        <InfoCircle size={32} />
      </div>
    </div>
  );
};

export default Tooltip;

/* add dependencies/local files X
 * add @description for Tooltip component X
 * Tooltip icon (pass as props or default icon?) Prob default for now, may change later.
 * setup onClick handler to toggle window (same as helpchat)
 * takes in children, which can be image / video, or p tags (different than codesandbox! Let children take in p tags!)
 * if time, set up so on left most, box will go to right and vice versa. On middle, should be straight down middle
 */
