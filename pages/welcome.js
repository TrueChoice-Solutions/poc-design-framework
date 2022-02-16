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
import Header from '../components/Header/Header';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome Page to render
 */
const Welcome = () => {
  return (
    <main className={styles.welcomePage}>
      <Container className={styles.container}>
        <Header logoImage="https://api.media.atlassian.com/file/9ca2847d-827b-40ca-bbca-dc03d3ab988f/binary?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI3NTljNWMwZi05MWMyLTQ3MmMtYWJlNC1hMmI0MjA0YjlhNDgiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjljYTI4NDdkLTgyN2ItNDBjYS1iYmNhLWRjMDNkM2FiOTg4ZiI6WyJyZWFkIl19LCJleHAiOjE2NDUwNTMzMDMsIm5iZiI6MTY0NDk3MDMyM30.dC-IYiz5fVrjNi1LetRDUZM6Woo9xh9eL_SjldhWryQ&client=759c5c0f-91c2-472c-abe4-a2b4204b9a48&name=atl.site.logo&max-age=2940" />
      </Container>
    </main>
  );
};

export default Welcome;
