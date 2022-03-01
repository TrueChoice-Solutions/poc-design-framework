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
import styles from './BackgroundVideo.module.css';

/**
 * @description - full viewport width/height background video
 * @return {jsx} - the Background Video to render
 */
const BackgroundVideo = ({
  videoUrl = 'https://static.videezy.com/system/resources/previews/000/038/595/original/alb_lightfx2072_1080p.mp4'
}) => {
  return (
    <video
      className={styles.backgroundVideo}
      src={videoUrl}
      autoPlay
      muted
      loop
    ></video>
  );
};

export default BackgroundVideo;
