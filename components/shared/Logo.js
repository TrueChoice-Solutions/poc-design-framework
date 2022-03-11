/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import Image from 'next/image';
// local files

/**
 * @description - returns Logo component
 * @param {string} props.imageSrc - the image source
 * @param {string} props.altText - the text for user accessibility
 * @param {string} props.linkSrc - the link to send user to
 * @param {number} props.imageWidth - the image's width
 * @param {number} props.imageHeight - the image's height
 * @return {jsx} - the Logo component to render
 */
const Logo = ({ imageSrc, altText, linkSrc, imageWidth, imageHeight }) => {
  return (
    <div className="pt-2">
      <a href={linkSrc} target="_blank" rel="noreferrer">
        <Image
          src={`/images/${imageSrc}`}
          alt={altText}
          width={`${imageWidth}`}
          height={`${imageHeight}`}
          layout="intrinsic"
        />
      </a>
    </div>
  );
};

export default Logo;
