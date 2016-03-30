// Filename: rdu_reduxscr.js  
// Timestamp: 2016.03.09-20:02:50 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

import { combineReducers } from 'redux';
import reduxscr_rdu_scroll from './reduxscr_rdu_scroll';
import reduxscr_rdu_userarr from './reduxscr_rdu_userarr';

export default combineReducers({
  reduxscr_rdu_scroll,
  reduxscr_rdu_userarr
});

