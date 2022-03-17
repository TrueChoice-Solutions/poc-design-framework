/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

const Level = ({ icon }) => {
  return (
    <div className="border">
      <div className="icon">{icon}</div>
      <div>Level</div>
    </div>
  );
};

export default Level;
