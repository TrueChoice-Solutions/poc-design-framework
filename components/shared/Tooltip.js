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
const Tooltip = ({ contentClassName }) => {
  // state
  const [open, setOpen] = useState(false);

  // event handlers
  /**
   * @description - on click event listener, toggles 'open' state between true & false
   */
  const toggleTooltipContent = () => {
    setOpen(!open);
  };

  // helper functions
  /**
   * @description - renders tooltip content based on 'open' state
   * @return {jsx} - caret and content to show
   */
  const renderTooltipContent = () => {
    return (
      open && (
        <div className="position-relative">
          <CaretUpFill
            className="text-dark"
            size={30}
            // style={{ top: '1.5625rem', left: '0' }}
            style={{
              position: 'absolute',
              top: '0.625rem',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              margin: 'auto'
            }}
          />
          <div
            className={`${contentClassName} position-absolute border`}
            style={{
              top: '1.775rem',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              margin: 'auto',
              width: '12.5rem'
            }}
          >
            Hello
          </div>
        </div>
      )
    );
  };

  return (
    <div className="d-inline-block">
      <InfoCircle
        size={24}
        className="bg-info rounded-circle cursor-pointer"
        onClick={toggleTooltipContent}
      />

      {renderTooltipContent()}
    </div>
  );
};

export default Tooltip;

/* takes in children, which can be image / video, or p tags (different than codesandbox! Let children take in p tags!)
 * if time, set up so on left most, box will go to right and vice versa. On middle, should be straight down middle
 */
