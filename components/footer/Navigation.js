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
import { useRouter } from 'next/router';
// local files

/**
 * @description - Stores a back and forward button, used to navigate pages
 * @param {string} props.forwardButtonText - text for forward button
 * @param {string} props.forwardButtonTextClassName - bootstrap class names to style forward button text
 * @param {string} props.backButtonText - text for back button
 * @param {string} props.backButtonTextClassName - bootstrap class names to style back button text
 * @return {jsx} - the Navigation component to render
 */
const Navigation = ({
  forwardButtonText,
  forwardButtonTextClassName,
  backButtonText,
  backButtonTextClassName
}) => {
  // useRouter
  const router = useRouter();

  // event handlers
  /**
   * @description - on click event handler goes back a page
   */
  const handleBackButtonClick = () => {
    router.back();
  };

  /**
   * @description - on click event handler goes next page
   */
  const handleForwardButtonClick = () => {
    console.log('forward button was clicked!');
  };

  return (
    <div className="d-flex">
      <Button
        variant="secondary"
        className="d-flex align-items-center"
        onClick={handleBackButtonClick}
      >
        <ChevronLeft size={24} />
        <span className={backButtonTextClassName}>{backButtonText}</span>
      </Button>
      <Button
        variant="success"
        className="d-flex align-items-center ms-2"
        onClick={handleForwardButtonClick}
      >
        <span className={forwardButtonTextClassName}>{forwardButtonText}</span>
        <ChevronRight size={24} />
      </Button>
    </div>
  );
};

export default Navigation;

/*
 * console log content for now
 * add description for each event handler function
 * use next router to goBack or for next, set up => WelcomePage for now
 */
