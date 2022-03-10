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
 * @description - Chat Window display w/ user & bot interactions
 * @param {string} props.cardClassNames - class names for Card bootstrap component
 * @return {jsx} - the ChatWindow component to render
 */
const ChatWindow = ({ cardClassNames = 'bg-dark' }) => {
  return (
    <div className="chat-window position-absolute bottom-0 start-0 z-index-top">
      <Card className={cardClassNames}>
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
