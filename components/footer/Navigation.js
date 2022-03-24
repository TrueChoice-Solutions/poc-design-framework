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
const Navigation = ({
  forwardButtonText = '',
  forwardButtonTextClassName,
  backButtonText = '',
  backButtonTextClassName
}) => {
  return (
    <div className="d-flex">
      <Button className="d-flex align-items-center btn-secondary">
        <ChevronLeft className="border" size={24} />
        <span className={backButtonTextClassName}>{backButtonText}</span>
      </Button>
      <Button className="d-flex bg-primary align-items-center ms-2 bg-success">
        <span className={forwardButtonTextClassName}>{forwardButtonText}</span>
        <ChevronRight size={24} className="border" />
      </Button>
    </div>
  );
};

export default Navigation;

/* pass Button text as props (for both? If user wants to do 'back' text)
 * add as params, update description
 * set default prop values to blank, just in case user only wants icons
 * fix styling on text added next to icons, slightly off centered
 * set up on click handlers for each button
 * console log content for now
 * add description for each event handler function
 * use next router to goBack or for next, set up => WelcomePage for now
 */
