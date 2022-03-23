/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import * as Icons from 'react-bootstrap-icons';
// local files
import Tooltip from '../shared/Tooltip';

/**
 * @description - returns icon, tooltip and text
 * @param {string} props.levelData - level data containing levelId, name, tooltipText, icon name
 * @return {jsx} - the LevelInfo component to render
 */
const LevelInfo = ({
  levelData,
  className,
  heightRem,
  iconClassName,
  tooltipClassName,
  textClassName
}) => {
  /* Icons is object with nested bootstrap icon name objects. Gets object matching level.
   * Rendering React components, so Icon variable must be capitalized. e.g.<Icon size={30} />
   */
  const Icon = Icons[levelData.icon];

  return (
    <div className={className} style={{ height: `${heightRem}` }}>
      <div className="position-relative">
        <div className={iconClassName}>
          <Icon size={30} />
        </div>
        {/* can set to position absolute if needed, remember it's relative to icon! */}
        <div className={tooltipClassName}>
          <Tooltip
            contentClassName="bg-dark p-3 text-center"
            contentAbsoluteStartingPosition="left"
          >
            {levelData.tooltipText}
          </Tooltip>
        </div>
      </div>

      <div className={textClassName}>{levelData.name}</div>
    </div>
  );
};

export default LevelInfo;
