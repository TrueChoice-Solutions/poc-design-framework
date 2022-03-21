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

/* pass Button text as props (for both? If user wants to do 'back' text)
 * add as params, update description
 * set default prop values to blank, just in case user only wants icons
 * set up on click handlers for each button
 * console log content for now
 * add description for each event handler function
 * use next router to goBack or for next, set up => WelcomePage for now
 */
