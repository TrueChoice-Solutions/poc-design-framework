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
import styles from './Header.module.css';
import Logo from '../shared/Logo';
import Timeline from '../shared/Timeline';

/**
 * @description - returns Header component
 * @return {jsx} - the Header component to render
 */
const Header = () => {
  return (
    // <section className={styles.header}>
    //   <div className="container">
    //     <Row className={`d-flex align-items-center ${styles.row}`}>
    //       <Col md={6} xl={8}>
    //         <Logo
    //           imageSrc="logo.png"
    //           altText="TrueChoice Logo"
    //           linkSrc="https://www.truechoice.io"
    //           imageWidth={200}
    //           imageHeight={33.33}
    //         />
    //       </Col>
    //       <Col md={6} xl={4} className="d-flex justify-content-md-end">
    //         <Timeline text="Welcome" />
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
    <div>Header</div>
  );
};

export default Header;
