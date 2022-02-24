/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
// local files
import styles from './Footer.module.css';
import Logo from '../shared/Logo';

/**
 * @description - returns Footer component
 * @return {jsx} - the Footer component to render
 */
const Footer = () => {
  return (
    // <footer className={styles.footer}>
    //   <Container>
    //     <Row>
    //       <Col>
    //         <div>Hello world</div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <div style={{ backgroundColor: 'rgba(8, 22, 57, 0.95)' }}>
    //     <Container>
    //       <div>Hello world again</div>
    //     </Container>
    //   </div>
    // </footer>
    <footer className="position-absolute text-white bottom-0 w-100">
      <div className="border border-secondary">
        <div className="container">Hello</div>
      </div>
      <div className="bg-primary">
        <div className="container">Hello</div>
      </div>
    </footer>
  );
};

export default Footer;
