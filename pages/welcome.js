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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// local files
import styles from './welcome.module.css';
import BackgroundImage from '../components/Background/BackgroundImage';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome Page to render
 */
const Welcome = () => {
  return (
    <Container className={styles.container}>
      <BackgroundImage imageSrc="https://mdbootstrap.com/img/new/slides/041.webp">
        <div>Hello world</div>
      </BackgroundImage>
    </Container>
  );
};

export default Welcome;
