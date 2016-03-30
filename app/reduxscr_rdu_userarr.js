// Filename: reduxscr_rdu_userlist.js  
// Timestamp: 2016.03.09-19:59:50 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

export default (state = [], action) => {
  var actype = action.type;

  if (actype === 'ADD_USER') {
    state = [
        ...state, action.user
    ];
  }

  return state;
};
