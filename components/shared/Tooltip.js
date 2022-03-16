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
 * @param {string} props.contentClassName - Tooltip content's bootstrap classes for styling
 * @param {string} props.contentAbsoluteStartingPosition - absolute starting (left, right, middle) position for content
 * @returns {jsx} - the Tooltip component to render
 */
const Tooltip = ({
  contentClassName,
  contentAbsoluteStartingPosition = 'center'
}) => {
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
  let contentAdjustor;
  if (contentAbsoluteStartingPosition === 'left') {
    contentAdjustor = {
      top: '1rem',
      left: '0',
      width: '12.5rem'
    };
  } else if (contentAbsoluteStartingPosition === 'right') {
    contentAdjustor = {
      top: '1rem',
      right: '0',
      width: '12.5rem'
    };
  } else {
    contentAdjustor = {
      top: '1rem',
      left: '50%',
      transform: 'translate(-50%)',
      margin: 'auto',
      width: '12.5rem'
    };
  }

  // render content
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
            size={24}
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
            style={contentAdjustor}
          >
            <p>Again</p>
            Hello
            <p>Hello</p>
            <p>There</p>
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

/* if time, set up so on left most, box will go to right and vice versa. On middle, should be straight down middle
 * takes in children, which can be image / video, or p tags (different than codesandbox! Let children take in p tags!)
 * style={{
              top: '15px',
              left: '0',
              width: '12.5rem'
            }}
 */
