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
import * as Icons from 'react-bootstrap-icons';
// local files
import styles from './Level.module.css';
import LevelInfo from './LevelInfo';
import Tooltip from '../shared/Tooltip';

/**
 * @description - returns icon, tooltip, text, and range slider
 * @param {object} props.levelData - level data containing levelId, name, tooltipText, icon name
 * @param {string} props.levelTextBoxHeightRem - level text box height in rems for consistent height across each level
 * @return {jsx} - the Level component to render
 */
const Level = ({ levelData, levelTextBoxHeightRem = '100%' }) => {
  /* Icons is object with nested bootstrap icon name objects. Gets object matching level.
   * Rendering React components, so Icon variable must be capitalized. e.g.<Icon size={30} />
   */
  const Icon = Icons[levelData.icon];

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
        <div className="d-flex align-items-center">
          <LevelInfo levelData={levelData} />
          <span className="ms-2">{levelData.name}</span>
        </div>
        <div className="mt-3 d-flex align-items-center">
          <input
            type="range"
            min="1"
            max="10"
            className="w-75"
            name="input-number"
            onChange={handleInputChange}
            value={inputValue}
          />
          <span className="ms-4">{inputValue}</span>
        </div>
      </div>
      {/* screen > 576px display ONLY big screen content */}
      <div className={`${styles.regularScreenContent} p-2 text-center`}>
        <div className="position-relative d-inline-block">
          <Icon size={30} />
          <div className="position-absolute top-100 start-100 translate-middle ms-3">
            <Tooltip contentClassName="bg-dark p-3 text-center">
              {levelData.tooltipText}
            </Tooltip>
          </div>
        </div>

        <div className="mt-3" style={{ height: `${levelTextBoxHeightRem}` }}>
          {levelData.name}
        </div>
        <div className="mt-3">
          <input
            orient="vertical"
            className="w-100"
            type="range"
            min="1"
            max="10"
            name="input-number"
            onChange={handleInputChange}
            value={inputValue}
          />
          <div>{inputValue}</div>
        </div>
      </div>
    </div>
  );
};

export default Level;

/*
 *
 * style range slider so it's consistent across all browsers (difficult...)
 */
