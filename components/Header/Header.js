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
import Logo from '../shared/Logo';
import Timeline from '../shared/Timeline';

/**
 * @description - returns Header component
 * @return {jsx} - the Header component to render
 */
const Header = () => {
  return (
    <div className="container-fluid header position-absolute">
      <div className="container">
        <div className="row text-light align-items-center border pt-2">
          <div className="col-12 col-sm-6">
            <Logo
              imageSrc="logo.png"
              altText="TrueChoice Logo"
              linkSrc="https://www.truechoice.io"
              imageWidth={200}
              imageHeight={33.33}
            />
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-sm-end">
            <Timeline text="Welcome" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
