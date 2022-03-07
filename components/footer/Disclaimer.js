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

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Disclaimer = () => {
  return (
    <menu className="list-unstyled m-0">
      <li className="ms-sm-3">
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
