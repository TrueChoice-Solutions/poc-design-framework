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
import styles from './Level.module.css';
import LevelInfo from './LevelInfo';
import Slider from '../../shared/Slider';

/**
 * @description - returns icon, tooltip, text, and range slider
 * @param {object} props.levelData - level data containing levelId, name, tooltipText, icon name
 * @return {jsx} - the Level component to render
 */
const Level = ({ levelData }) => {
  return (
    <div>
      {/* screen < 576px display ONLY small screen content */}
      <div className={`${styles.smallScreenContent} p-2`}>
        <LevelInfo
          levelData={levelData}
          className="d-flex align-items-center"
          iconClassName="d-none"
          tooltipClassName="position-relative"
          textClassName="ms-2"
        />
        <Slider
          sliderClassName="mt-3 d-flex align-items-center"
          displayValueClassName="ms-3"
          name="range-slider"
          minValue="1"
          maxValue="10"
        />
      </div>

      {/* screen > 576px display ONLY big screen content */}
      <div className={`${styles.regularScreenContent} p-2 text-center`}>
        <LevelInfo levelData={levelData} heightRem="12.5rem" />
        <Slider
          sliderClassName="mt-3"
          name="range-slider"
          minValue="1"
          maxValue="10"
          orient="vertical"
        />
      </div>
    </div>
  );
};

export default Level;
