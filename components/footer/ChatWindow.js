/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { Card, Form, FormLabel, FormControl } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
// local files

/**
 * @description - Chat Window display w/ user & bot interactions
 * @param {string} props.cardClassName - class names for Card bootstrap component
 * @return {jsx} - the ChatWindow component to render
 */
const ChatWindow = ({ cardClassName = 'bg-dark', toggleChatWindowDisplay }) => {
  return (
    <div className="chat-window position-absolute bottom-0 start-0 z-index-top">
      <Card body className={cardClassName}>
        <div className="clearfix">
          <X
            size={24}
            className="float-end cursor-pointer"
            onClick={toggleChatWindowDisplay}
          />
          <p className="bg-secondary bg-gradient w-75 rounded-2 p-3 mb-2">
            Please indicate how much you prefer or value each item in relation
            to the others
          </p>
          <p className="bg-info bg-gradient text-white w-75 rounded-2 p-3 float-end">
            You cannot have the same preference value for all the choices shown.
            Can I help you with something else?
          </p>
        </div>
        <hr />
        <Form>
          <FormLabel htmlFor="user-input">
            Can I help you with something else?
            <FormControl
              className="mt-2"
              id="user-input"
              type="text"
              placeholder="Your text here..."
            />
          </FormLabel>
        </Form>
      </Card>
    </div>
  );
};

export default ChatWindow;
