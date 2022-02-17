/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import Logo from '../shared/Logo';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavLink from 'react-bootstrap/NavLink';
// local files

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Footer = () => {
  return (
    <Navbar
      fixed="bottom"
      style={{
        border: '1px solid red',
        maxWidth: '1110px',
        margin: '0 auto',
        color: 'white'
      }}
    >
      <Container fluid>
        <NavbarBrand href="https://www.truechoice.io">
          <Logo
            imageSrc="logo.png"
            altText="TrueChoice Logo"
            imageWidth={200}
            imageHeight={33.33}
          />
          <span>© TrueChoice Solutions, Inc. | Privacy Policy</span>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Footer;
