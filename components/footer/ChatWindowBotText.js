/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
// local files

/**
 * @description - Chat Window display w/ user & bot interactions
 * @param {string} props.text - paragraph text to display
 * @param {string} props.className - class name styling from Bootstrap
 * @return {jsx} - the ChatWindow component to render
 */
const ChatWindowBotText = ({ text, className = '' }) => {
  return <p className={className}>{text}</p>;
};

export default ChatWindowBotText;
