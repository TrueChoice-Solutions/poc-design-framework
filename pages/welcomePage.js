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
import BackgroundCoverImage from '../components/background/BackgroundCoverImage';
import BackgroundOverlayTint from '../components/background/BackgroundOverlayTint';
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
      <BackgroundCoverImage bgImageUrl="https://previews.123rf.com/images/efetova/efetova1506/efetova150600053/41047963-borrosa-multitud-de-gente-que-camina-en-la-ciudad-con-edificios-en-el-fondo-en-blanco-y-negro.jpg" />
      <BackgroundOverlayTint
        direction="131.3deg"
        startColor="green"
        endColor="blue"
      />
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
