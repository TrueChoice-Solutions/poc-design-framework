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
import styles from './Header.module.css';
import Logo from './Logo';
import Timeline from './Timeline';

/**
 * @description - returns Header component
 * @return {jsx} - the Header to render
 */
const Header = ({ logoImage }) => {
  return (
    <section className={styles.header}>
      <Logo logoImage={logoImage} />
      <div className={styles.timeline}>
        <Timeline text="Welcome" />
      </div>
    </section>
  );
};

export default Header;
