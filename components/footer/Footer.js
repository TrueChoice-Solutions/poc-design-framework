/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavLink from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// local files
import styles from './Footer.module.css';
import Logo from '../shared/Logo';

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Footer = () => {
  // md={6} xl={8}
  return (
    <section className="footer">
      <Navbar
        fixed="bottom"
        style={{
          border: '1px solid red',
          maxWidth: '1110px',
          margin: '0 auto',
          padding: '0 1rem',
          color: '#fff'
        }}
      >
        <NavbarBrand href="#" className={styles.navbarBrand}>
          <Logo
            imageSrc="truechoice.png"
            altText="Powered by TrueChoice"
            imageWidth={110}
            imageHeight={24}
          />
          <span className={styles.links}>
            <a className={styles.link} href="https://www.google.com">
              © TrueChoice Solutions, Inc.
            </a>{' '}
            |{' '}
            <a className={styles.link} href="https://www.google.com">
              Privacy Policy
            </a>
          </span>
        </NavbarBrand>
      </Navbar>
    </section>

    // <Row>
    //   <Navbar
    //     fixed="bottom"
    //     style={{
    //       border: '1px solid red',
    //       maxWidth: '1110px',
    //       margin: '0 auto',
    //       padding: '0 1rem'
    //     }}
    //   >
    //     <Col md={10} xl={8}>
    //       <NavbarBrand href="#">
    //         <Logo
    //           imageSrc="truechoice.png"
    //           altText="Powered by TrueChoice"
    //           imageWidth={110}
    //           imageHeight={24}
    //         />
    //       </NavbarBrand>
    //     </Col>
    //     <Col md={2} xl={8}>
    //       <NavLink
    //         href="#"
    //         style={{
    //           color: 'rgba(255, 255, 255, 0.5)',
    //           fontSize: '12px'
    //         }}
    //       >
    //         © TrueChoice Solutions, Inc. | Privacy Policy
    //       </NavLink>
    //     </Col>
    //   </Navbar>
    // </Row>
  );
};

export default Footer;
