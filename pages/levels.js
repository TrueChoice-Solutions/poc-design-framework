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
import LevelsContent from '../components/body/LevelsContent';
import Footer from '../components/footer/Footer';
import applicationData from '../data/application.json';

/**
 * @description - returns Levels One Page
 * @return {jsx} - the Levels One Page to render
 */
const Levels = () => {
  const attribute = applicationData.attributes[0];

  console.log(attribute);

  return (
    <main>
      {/* eslint-disable-next-line max-len */}
      <BackgroundImage bgImageUrl="https://previews.123rf.com/images/efetova/efetova1506/efetova150600053/41047963-borrosa-multitud-de-gente-que-camina-en-la-ciudad-con-edificios-en-el-fondo-en-blanco-y-negro.jpg" />
      <BackgroundOverlayTint
        direction="131.3deg"
        startColor="blue"
        endColor="purple"
      />
      <Header text="Learn: 1 of 5" progressBarValue="25" />
      <LevelsContent />
      <Footer>
        <p className="w-75 mb-3">
          This question is asking you to state your preferences across a range
          of options.
        </p>
        <p className="w-75 mb-3">
          Please indicate how much you prefer or value each option - in relation
          to the others - by moving the slider to a GREATER or LESSER preference
          or value. How far you move the slider depends on how strongly you feel
          about the option.
        </p>
        <p className="w-75 mb-3">
          You cannot have the same preference value for all the options shown.
        </p>
      </Footer>
    </main>
  );
};

export default Levels;
