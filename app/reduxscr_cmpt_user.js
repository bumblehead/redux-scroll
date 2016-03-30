// Filename: reduxscr_cmpt_user.js  
// Timestamp: 2016.03.09-21:33:46 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

import React from 'react';

const reduxscr_cmpt_user = ({ onClick, completed, text, id, user }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
     }}>
    <img src={user.avatar_url} width="400" height="400" />
    {user.id}
  </li>
);

export default reduxscr_cmpt_user;

