/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

import Image from 'next/image';
// dependencies
// local files

/**
 * @description - returns Logo component
 * @return {jsx} - the Logo component to render
 */

const Logo = ({ imageSrc }) => {
  return (
    <Image
      src={`/images/${imageSrc}`}
      alt="Hello"
      width={216}
      height={31.73}
      layout="fixed"
    />
  );
};

export default Logo;
