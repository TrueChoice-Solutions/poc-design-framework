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
 * @param {jsx} props.children - additional jsx added, such as images/videos/paragraphs
 * @returns {jsx} - the Tooltip component to render
 */
const Tooltip = ({
  contentClassName = 'bg-dark',
  contentAbsoluteStartingPosition = 'center',
  children
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
  /**
   * @description - position absolute starting point for content, based on contentAbsoluteStartingPosition prop
   * @returns {object} - content styling stored in object to be used as inline-styling
   */
  const getContentStartPosition = () => {
    const contentStyles = {
      top: '0.85rem',
      width: '12.5rem'
    };

    if (
      contentAbsoluteStartingPosition === 'left' ||
      contentAbsoluteStartingPosition === 'right'
    ) {
      contentStyles[contentAbsoluteStartingPosition] = '0.2rem';
    } else {
      contentStyles.left = '50%';
      contentStyles.transform = 'translate(-50%)';
      contentStyles.margin = 'auto';
    }

    return contentStyles;
  };

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
            className={`${contentClassName} position-absolute`}
            style={getContentStartPosition()}
          >
            {children}
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
