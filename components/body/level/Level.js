/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { useState } from 'react';
// local files
import styles from './Level.module.css';
import LevelInfo from './LevelInfo';
import Slider from '../../shared/Slider';

/**
 * @description - returns icon, tooltip, text, and range slider
 * @param {object} props.levelData - level data containing levelId, name, tooltipText, icon name
 * @return {jsx} - the Level component to render
 */
const Level = ({ levelData }) => {
  // state
  const [inputValue, setInputValue] = useState('5');

  // event handler
  /**
   * @description - stores input range value into 'inputValue' state
   * @param {object} event - get user's value from interacting with range slider
   */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* screen < 576px display ONLY small screen content */}
      <div className={`${styles.smallScreenContent} p-2`}>
        <LevelInfo
          levelData={levelData}
          className="d-flex align-items-center"
          iconClassName="d-none"
          textClassName="ms-2"
        />

        <Slider
          sliderClassName="mt-3 d-flex align-items-center"
          displayValueClassName="ms-3"
          handleInputChange={handleInputChange}
          name="range-slider"
          value={inputValue}
          minValue="1"
          maxValue="10"
        />
      </div>
      {/* screen > 576px display ONLY big screen content */}
      <div className={`${styles.regularScreenContent} p-2 text-center`}>
        <LevelInfo
          levelData={levelData}
          heightRem="12.5rem"
          className="d-flex flex-column align-items-center"
          tooltipClassName="position-absolute top-100 start-100 translate-middle ms-3"
          textClassName="d-block mt-3"
        />
        <Slider
          sliderClassName="mt-3"
          handleInputChange={handleInputChange}
          name="range-slider"
          value={inputValue}
          minValue="1"
          maxValue="10"
          orient="vertical"
        />
      </div>
    </div>
  );
};

export default Level;
