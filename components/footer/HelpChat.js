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
import { EmojiLaughing, CaretLeftFill } from 'react-bootstrap-icons';
// local files
import ChatWindow from './ChatWindow';

/**
 * @description - Help Chat icon. Opens a chat window on click
 * @param {string} props.helpChatText - button-like chat text to display
 * @return {jsx} - the HelpChat component to render
 */
const HelpChat = ({ helpChatText }) => {
  // state
  const [open, setOpen] = useState(false);

  // event handlers
  /**
   * @description - on click event listener that toggles "open" state between true or false boolean values
   * @return {undefined} - Nothing to return
   */
  const toggleChatWindowDisplay = () => {
    setOpen(!open);
  };

  // conditional renders
  const renderChatWindow = open ? (
    <ChatWindow toggleChatWindowDisplay={toggleChatWindowDisplay} />
  ) : (
    ''
  );

  return (
    <div className="d-flex align-items-center">
      <EmojiLaughing size={24} />
      <div className="position-relative bg-dark text-white ms-3 my-1">
        <div className="p-2 cursor-pointer" onClick={toggleChatWindowDisplay}>
          <span className="d-inline-block mb-1">{helpChatText}</span>
        </div>
        <CaretLeftFill
          size={35}
          className="text-dark position-absolute top-50 start-0 translate-middle cursor-pointer"
          onClick={toggleChatWindowDisplay}
        />
        {renderChatWindow}
      </div>
    </div>
  );
};

export default HelpChat;
