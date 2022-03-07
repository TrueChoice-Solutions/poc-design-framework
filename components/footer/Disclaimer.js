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
 * @description - Copyright and Privacy Policy, with respective texts and links
 * @param {string} props.copyrightText - Copyright text
 * @param {string} props.copyrightLink - Copyright link
 * @param {string} props.privacyText - Privacy Policy text
 * @param {string} props.privacyLink - Privacy Policy link
 * @return {jsx} - the Footer component to render
 */
const Disclaimer = () => {
  return (
    <menu className="list-unstyled m-0">
      <li>
        <small>
          <a
            className="text-decoration-none text-white"
            href="https://www.truechoice.io"
            target="_blank"
            rel="noreferrer"
          >
            © TrueChoice Solutions, Inc.
          </a>{' '}
          |{' '}
          <a
            className="text-decoration-none text-white"
            href="https://www.truechoice.io/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </small>
      </li>
    </menu>
  );
};

export default Disclaimer;
