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
import Navigation from './Navigation';
import Logo from '../shared/Logo';
import Disclaimer from './Disclaimer';

/**
 * @description - returns Footer component
 * @param {boolean} props.showNavigation - true or false boolean values to conditionally render Navigation component
 * @param {jsx} props.children - chat bot paragraph texts
 * @return {jsx} - the Footer component to render
 */
const Footer = ({ showNavigation = true, children }) => {
  // conditional renders
  /**
   * @description - conditionally render Navigation component, based on 'showNavigation' prop
   * @return {jsx} - the Navigation component to render
   */
  const renderNavigation = () => {
    return (
      showNavigation && (
        <Navigation
          forwardButtonText="Next"
          forwardButtonTextClassName="d-inline-block me-2 mb-1"
          backButtonTextClassName="d-inline-block"
          path="/levels"
        />
      )
    );
  };

  return (
    <footer>
      <Container
        fluid
        className="position-fixed bottom-0 bg-primary text-white-50"
      >
        <Container className="h-100 d-flex align-items-center justify-content-between">
          <div>
            <HelpChat
              helpChatText="How can I help you?"
              helpChatTextSmallScreen="Help?"
            >
              {children}
            </HelpChat>
          </div>
          <div>{renderNavigation()}</div>
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
