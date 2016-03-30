// Filename: reduxscr_action.js  
// Timestamp: 2016.03.09-17:57:10 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

export const scrollDOWM = (mpx) => {
  return {
    type: 'SCROLL_DOWN',
    mpx
  };
};

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  };
};
