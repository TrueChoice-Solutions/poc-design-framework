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
import Tooltip from '../shared/Tooltip';

/**
 * @description - returns icon, tooltip and text
 * @param {string} props.levelData - level data containing levelId, name, tooltipText, icon name
 * @return {jsx} - the LevelInfo component to render
 */
const LevelInfo = ({ levelData }) => {
  return (
    <div>
      <Tooltip
        contentClassName="bg-dark p-3 text-center"
        contentAbsoluteStartingPosition="left"
      >
        {levelData.tooltipText}
      </Tooltip>
    </div>
  );
};

export default LevelInfo;

/*
 * add icon, tooltip, text here. (maybe use children..?)
 * update description with props
 * move onto LevelSlider component
 */
