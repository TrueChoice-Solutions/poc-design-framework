/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import { Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
// local files

/**
 * @description - Stores a back and forward button, used to navigate pages
 * @return {jsx} - the Navigation component to render
 */
const Navigation = () => {
  return (
    <div>
      <Button>
        <ChevronLeft />
      </Button>
      <Button>
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Navigation;
