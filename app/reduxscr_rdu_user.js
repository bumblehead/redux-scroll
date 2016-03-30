// Filename: reduxscr_rdu_user.js  
// Timestamp: 2016.03.09-19:59:44 (last modified)
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
