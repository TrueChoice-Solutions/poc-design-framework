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
// local files
import styles from './Footer.module.css';
import Logo from '../shared/Logo';

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Footer = () => {
  return (
    <section className="footer">
      <Navbar
        fixed="bottom"
        style={{
          margin: '0 auto',
          padding: '0 1rem'
        }}
        className={styles.navbar}
      >
        <Logo
          imageSrc="truechoice.png"
          altText="Powered by TrueChoice"
          linkSrc="https://www.truechoice.io/"
          imageWidth={110}
          imageHeight={24}
        />
        <div className={styles.links}>
          <a className={styles.link} href="https://www.truechoice.io/">
            © TrueChoice Solutions, Inc.
          </a>{' '}
          |{' '}
          <a
            className={styles.link}
            href="https://www.truechoice.io/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
      </Navbar>
    </section>
  );
};

export default Footer;
