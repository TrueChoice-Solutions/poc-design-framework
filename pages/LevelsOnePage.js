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
import BackgroundImage from '../components/background/BackgroundImage';
import BackgroundOverlayTint from '../components/background/BackgroundOverlayTint';
import Header from '../components/header/Header';

/**
 * @description - returns Levels One Page
 * @return {jsx} - the Levels One Page to render
 */
const LevelsOnePage = () => {
  return (
    <main>
      {/* eslint-disable-next-line max-len */}
      <BackgroundImage bgImageUrl="https://previews.123rf.com/images/efetova/efetova1506/efetova150600053/41047963-borrosa-multitud-de-gente-que-camina-en-la-ciudad-con-edificios-en-el-fondo-en-blanco-y-negro.jpg" />
      <BackgroundOverlayTint
        direction="131.3deg"
        startColor="blue"
        endColor="purple"
      />
      {/*
      <Header logo={<Logo
        imageSrc="logo.png"
        altText="TrueChoice Logo"
        linkSrc="https://www.truechoice.io"
        imageWidth={200}
        imageHeight={33.33}
      />} timeline={<Timeline
        text="Welcome"
        progressBarClassName="float-sm-end w-25"
        progressBarValue="25"
      />} />


      {/* pass as children
      <Header>
      <Col sm={6}>
      <Logo
        imageSrc="logo.png"
        altText="TrueChoice Logo"
        linkSrc="https://www.truechoice.io"
        imageWidth={200}
        imageHeight={33.33}
      />
    </Col>
    <Col sm={6} className="text-sm-end">
      <Timeline
        text="Welcome"
        progressBarClassName="float-sm-end w-25"
        progressBarValue="25"
      />
    </Col>
      </Header>
  */}
    </main>
  );
};

export default LevelsOnePage;
