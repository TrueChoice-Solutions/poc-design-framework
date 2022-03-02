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
// import BackgroundVideo from '../components/background/BackgroundVideo';
import Header from '../components/header/Header';
import Welcome from '../components/body/Welcome';
import Footer from '../components/footer/Footer';

/**
 * @description - returns Welcome component
 * @return {jsx} - the Welcome Page to render
 */
const WelcomePage = () => {
  return (
    <main>
      <BackgroundImage bgImageUrl="https://previews.123rf.com/images/efetova/efetova1506/efetova150600053/41047963-borrosa-multitud-de-gente-que-camina-en-la-ciudad-con-edificios-en-el-fondo-en-blanco-y-negro.jpg" />
      <BackgroundOverlayTint
        direction="131.3deg"
        startColor="green"
        endColor="blue"
      />
      {/* <BackgroundVideo videoUrl="https://athleticgreens.com/prismic-cdn/athletic-greens-new/9801f592-c3f9-418e-949d-c971bd9d67ec_AG_ALT+SCRIPT+30_No_Logo_No_Legal_0817_1215_ProRes_3.mp4" /> */}
      <Header />
      <Welcome
        h1Text="What Matters to You!"
        h2Text="Share your preferences and perspectives with us."
      />
      <Footer />
    </main>
  );
};

export default WelcomePage;
