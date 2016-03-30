// Filename: reduxscr_cmpt_userlist.js  
// Timestamp: 2016.03.09-21:29:23 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

import React from 'react';
import Reduxscr_cmpt_user from './reduxscr_cmpt_user';
import reduxscr_rdu_userarr from './reduxscr_rdu_userarr';

const reduxscr_cmpt_userlist = ({ reduxscr_rdu_userarr }) => {

  var onClick = function () {
    console.log('click!');
  };

  return (
    <ul>
      {reduxscr_rdu_userarr.map(user => (
        <Reduxscr_cmpt_user
           key={user.id}
           user={user}
           onClick={onClick}
           />))}
    </ul>
  );
};

export default reduxscr_cmpt_userlist;
