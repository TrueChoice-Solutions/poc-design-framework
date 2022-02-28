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
import styles from './BackgroundCoverImage.module.css';

/**
 * @description - full viewport width/height background image
 * @param {string} props.h1Text - h1 text
 * @param {string} props.h2Text - h2 text
 * @return {jsx} - the Background Cover Image to render
 */

const BackgroundCoverImage = ({ bgImageUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      className={`${styles.backgroundCoverImage}`}
    ></div>
  );
};

export default BackgroundCoverImage;
