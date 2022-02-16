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
import Logo from './Logo/Logo';

/**
 * @description - returns Header component
 * @return {jsx} - the Header to render
 */
const Header = () => {
  return (
    <section className="header">
      <Logo />
    </section>
  );
};

export default Header;
