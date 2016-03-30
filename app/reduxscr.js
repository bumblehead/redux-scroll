// Filename: reduxscr.js  
// Timestamp: 2016.03.09-21:14:46 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  


import React from 'react';
import styles from './reduxscr.css';
import Reduxscr_cntn_userlist from './reduxscr_cntn_userlist';

const reduxscr = ({ reduxscr_rdu_userarr }) => (
  <div className={styles.app}>
    <Reduxscr_cntn_userlist />
  </div>
);


export default reduxscr;



