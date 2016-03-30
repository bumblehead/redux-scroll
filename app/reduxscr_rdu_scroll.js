// Filename: rdu_reduxscr_scroll.js  
// Timestamp: 2016.03.09-17:39:18 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

export default (state = [], action) => {
  var actype = action.type;

  if (actype === 'SCROLL_DOWN') {
    console.log('action type is scroll down');
  }

  return state;
}
