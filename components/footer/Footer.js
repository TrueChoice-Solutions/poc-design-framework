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
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// local files

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Footer = () => {
  return (
    <row>
      <Navbar
        fixed="bottom"
        style={{
          border: '5px solid red',
          maxWidth: '1110px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        <NavbarBrand href="#">
          <Logo
            imageSrc="truechoice.png"
            altText="Powered by TrueChoice"
            imageWidth={110}
            imageHeight={24}
          />
        </NavbarBrand>
      </Navbar>
    </row>
  );
};

export default Footer;
