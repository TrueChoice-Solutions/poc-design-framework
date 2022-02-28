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
import styles from './BackgroundOverlayTint.module.css';

/**
 * @description - full viewport width/height background gradient
 * @param {string} props.direction - direction for gradient from start to end
 * @param {string} props.startColor - starting color for gradient
 * @param {string} props.endColor - ending color for gradient
 * @return {jsx} - the Background Cover Image to render
 */

const BackgroundOverlayTint = ({ direction, startColor, endColor }) => {
  return (
    <div
      style={{
        background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
      }}
      className={styles.backgroundOverlayTint}
    />
  );
};

export default BackgroundOverlayTint;
