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
import Logo from '../shared/Logo';
import Button from '../shared/Button';

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid position-fixed bottom-0 bg-primary">
        <div className="container h-100">
          <div className="row text-white py-2">
            <div className="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-emoji-laughing me-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"></path>
              </svg>
              <Button
                text="Help?"
                bgColor="btn-dark"
                textColor="text-white"
                outline="btn-outline-dark"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid position-fixed"
        style={{ bottom: '80px' }}
      >
        <div className="container">
          <div className="text-white d-flex flex-column flex-sm-row align-items-sm-center">
            <Logo
              imageSrc="truechoice.png"
              altText="Powered by TrueChoice"
              linkSrc="https://www.truechoice.io"
              imageWidth={110}
              imageHeight={24}
            />
            <small className="ms-sm-2">
              © TrueChoice Solutions, Inc. | Privacy Policy
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
