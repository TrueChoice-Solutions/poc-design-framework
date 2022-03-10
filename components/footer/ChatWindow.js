/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { Card } from 'react-bootstrap';
// local files

/**
 * @description - Chat Window display with a label for asking questions
 * @return {jsx} - the ChatWindow component to render
 */
const ChatWindow = () => {
  return (
    <div className="position-absolute bottom-0 start-0 chat-window">
      <Card>
        <p>HELLO WORLD</p>
        <p>HELLO WORLD</p>
        <p>HELLO WORLD</p>
        <p>HELLO WORLD</p>
        <p>HELLO WORLD</p>
      </Card>
    </div>
  );
};

export default ChatWindow;
