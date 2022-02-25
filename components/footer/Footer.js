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
    <footer>
      <div className="container-fluid position-fixed bottom-0 bg-primary">
        <div className="container h-100">
          <div className="row text-white py-2">
            <div className="col">
              <small>How can I help you?</small>
            </div>
          </div>
        </div>

        <div
          className="container-fluid position-absolute"
          style={{ bottom: '80px', left: '0' }}
        >
          <div className="container">
            <div className="text-white d-flex flex-column flex-sm-row align-items-sm-center">
              <Logo
                imageSrc="truechoice.png"
                altText="Powered by TrueChoice"
                linkSrc="https://www.truechoice.io"
                imageWidth={110}
                imageHeight={24}
              />
              <small className="ms-sm-2">
                © TrueChoice Solutions, Inc. | Privacy Policy
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="row text-white">
//   <div className="col d-flex flex-column flex-sm-row">
//     <Logo
//       imageSrc="truechoice.png"
//       altText="Powered by TrueChoice"
//       linkSrc="https://www.truechoice.io"
//       imageWidth={110}
//       imageHeight={124}
//     />
//     <small>© TrueChoice Solutions, Inc. | Privacy Policy</small>
//   </div>
// </div>;
