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
import styles from './welcome.module.css';
import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome Page to render
 */
const WelcomePage = () => {
  return (
    <main className={styles.welcomePage}>
      <Container className={styles.container}>
        <Header />
        <Body />
      </Container>
      <Footer />
    </main>
  );
};

export default WelcomePage;
