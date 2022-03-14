/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { Container } from 'react-bootstrap';
// local files
import HelpChat from './HelpChat';
import Logo from '../shared/Logo';
import Disclaimer from './Disclaimer';

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Footer = () => {
  return (
    <footer>
      <Container
        fluid
        className="position-fixed bottom-0 bg-primary text-white-50"
      >
        <Container className="h-100">
          <HelpChat
            helpChatText="How can I help you?"
            helpChatTextSmallScreen="Help?"
          >
            <p className="w-75 mb-3">
              Please indicate how much you prefer or value each item in relation
              to the others. How far you move the slider depends on how strongly
              you feel about the item.
            </p>
            <p className="w-75 mb-3">
              You cannot have the same preference value for all the choices
              shown
            </p>
            <p className="w-75 mb-3">Can I help you with something else?</p>
          </HelpChat>
        </Container>
      </Container>

      <Container
        fluid
        className="position-fixed z-index-bottom"
        style={{ bottom: '5rem' }}
      >
        <Container className="d-flex flex-column flex-sm-row align-items-sm-center text-white">
          <Logo
            imageSrc="truechoice.png"
            altText="Powered by TrueChoice"
            linkSrc="https://www.truechoice.io"
            imageWidth={110}
            imageHeight={24}
          />
          <span className="me-3"></span>
          <Disclaimer
            copyrightText="© TrueChoice Solutions, Inc."
            copyrightLink="https://www.truechoice.io"
            privacyText="Privacy Policy"
            privacyLink="https://www.truechoice.io/privacy-policy"
          />
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
