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
import WelcomeContent from '../components/body/WelcomeContent';
import Footer from '../components/footer/Footer';

/**
 * @description - returns Welcome Page
 * @return {jsx} - the Welcome Page to render
 */
const Welcome = () => {
  return (
    <main>
      {/* eslint-disable-next-line max-len */}
      <BackgroundImage bgImageUrl="https://previews.123rf.com/images/efetova/efetova1506/efetova150600053/41047963-borrosa-multitud-de-gente-que-camina-en-la-ciudad-con-edificios-en-el-fondo-en-blanco-y-negro.jpg" />
      <BackgroundOverlayTint
        direction="131.3deg"
        startColor="green"
        endColor="blue"
      />
      <Header text="Welcome" progressBarValue="0" />
      <WelcomeContent />
      <Footer>
        <p className="w-75 mb-3">
          Please indicate how much you prefer or value each item in relation to
          the others. How far you move the slider depends on how strongly you
          feel about the item.
        </p>
        <p className="w-75 mb-3">
          You cannot have the same preference value for all the choices shown
        </p>
        <p className="w-75 mb-3">Can I help you with something else?</p>
      </Footer>
    </main>
  );
};

export default Welcome;
