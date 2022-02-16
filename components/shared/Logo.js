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
 * @return {jsx} - the Logo component to render
 */
const Logo = ({ imageSrc, altText }) => {
  return (
    <Image
      src={`/images/${imageSrc}`}
      alt={altText}
      width={216}
      height={31.73}
      layout="fixed"
    />
  );
};

export default Logo;
