/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { EmojiLaughing, CaretLeftFill } from 'react-bootstrap-icons';
// local files

/**
 * @description - Help Chat icon and button that opens a chat window on click
 * @return {jsx} - the HelpChat component to render
 */
const HelpChat = () => {
  return (
    <div className="d-flex align-items-center">
      <EmojiLaughing size={24} />
      <div className="position-relative bg-dark text-white p-2 ms-3 my-1">
        <CaretLeftFill
          size={35}
          className="text-dark position-absolute top-50 start-0 translate-middle cursor-pointer"
        />
        <span className="d-inline-block mb-1 cursor-pointer">
          How can I help you?
        </span>
      </div>
    </div>
  );
};

export default HelpChat;

// <Row className="text-white py-2">
//   {/* position relative set on col for triangle */}
//   <Col className="position-relative">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       fill="currentColor"
//       className="bi bi-emoji-laughing me-3"
//       viewBox="0 0 16 16"
//     >
//       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
//       <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"></path>
//     </svg>
//     {/* triangle */}
//     <span
//       style={{
//         position: 'absolute',
//         top: '9px',
//         left: '47px',
//         width: '0',
//         height: '0',
//         borderStyle: 'solid',
//         borderWidth: '10px 10px 12px 0',
//         borderColor: 'transparent #212529 transparent transparent'
//       }}
//     ></span>
//     <Button
//       text="How can I help you?"
//       bgColor="btn-dark"
//       textColor="text-white"
//       outline="btn-outline-dark"
//     />
//   </Col>
// </Row>;
