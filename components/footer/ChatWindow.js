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
import { Card, Form, FormLabel, FormControl } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
// local files

/**
 * @description - Chat Window display w/ user & bot interactions
 * @param {string} props.cardClassName - class names for Card bootstrap component
 * @param {function} props.toggleChatWindowDisplay - toggle "open" state. Functionality: on X icon click, close window
 * @return {jsx} - the ChatWindow component to render
 */
const ChatWindow = ({ cardClassName = 'bg-dark', toggleChatWindowDisplay }) => {
  // state
  const [userText, setUserText] = useState('');
  const [userMessages, setUserMessages] = useState([]);

  if (userMessages.length > 3) {
    setUserMessages([...userMessages.slice(1)]);
  }

  // event handlers
  /**
   * @description - on change event listener that sets "userText" state to user's input value
   * @param {object} event - event object, accessing the event.target.value to get user's text
   * @return {undefined} - Nothing to return
   */
  const handleInputChange = (event) => {
    setUserText(event.target.value);
  };

  /**
   * @description - form submit event listener. 1) prevents default refreshing of page when submitting form
   * 2) After submit, sets the text input to blank. 3) Sets "userMessages" state to include
   * previous & current submitted texts
   * @param {object} event - event object, accessing the event.target.value to get user's text
   * @return {undefined} - Nothing to return
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUserText('');
    setUserMessages([...userMessages, userText]);
  };

  // render content
  const renderUserMessages = userMessages.map((userMessage, i) => (
    <p
      key={i}
      className="bg-info bg-gradient text-white w-75 rounded-2 p-3 float-end"
    >
      {userMessage}
    </p>
  ));

  return (
    <div className="chat-window position-absolute bottom-0 start-0">
      <Card body className={cardClassName}>
        <div className="clearfix">
          <X
            size={24}
            className="float-end cursor-pointer"
            onClick={toggleChatWindowDisplay}
          />
          <p className="bg-secondary bg-gradient w-75 rounded-2 p-3 mb-2">
            Hello - How may I help you today?
          </p>
          {renderUserMessages}
        </div>
        <hr />
        <Form onSubmit={handleFormSubmit}>
          <FormLabel htmlFor="user-input">
            Can I help you with something else?
            <FormControl
              id="user-input"
              className="mt-2"
              type="text"
              name="user-input"
              placeholder="Your text here..."
              onChange={handleInputChange}
              value={userText}
            />
          </FormLabel>
        </Form>
      </Card>
    </div>
  );
};

export default ChatWindow;
