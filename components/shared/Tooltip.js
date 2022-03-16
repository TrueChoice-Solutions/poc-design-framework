/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { useState } from 'react';
import { InfoCircle, CaretUpFill } from 'react-bootstrap-icons';
// local files

/**
 * @description - Tooltip icon. On click, opens a little text window
 * @returns {jsx} - the Tooltip component to render
 */
const Tooltip = () => {
  // state
  const [open, setOpen] = useState(false);

  // event handlers
  const toggleTooltipText = () => {
    setOpen(!open);
    console.log('clicked!');
  };

  // helper functions
  const renderTooltipContent = () => {
    return (
      open && (
        <CaretUpFill
          className="text-dark position-absolute"
          size={30}
          style={{ top: '1.5625rem', left: '0' }}
        />
      )
    );
  };

  return (
    <div className="d-inline-block position-relative">
      <div>
        <InfoCircle
          size={32}
          className="bg-info rounded-circle border cursor-pointer"
          onClick={toggleTooltipText}
        />
      </div>
      {renderTooltipContent()}
    </div>
  );
};

export default Tooltip;

/* add description for event handler
 * add description for helper function
 * takes in children, which can be image / video, or p tags (different than codesandbox! Let children take in p tags!)
 * if time, set up so on left most, box will go to right and vice versa. On middle, should be straight down middle
 */
