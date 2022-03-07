/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import Container from 'react-bootstrap/Container';
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
      <Container fluid className="position-fixed bottom-0 bg-primary border">
        <Container className="h-100">
          <HelpChat />
        </Container>
      </Container>

      <Container fluid className="position-fixed" style={{ bottom: '80px' }}>
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
