// Filename: reduxscr_cntn_userlist.js  
// Timestamp: 2016.03.09-21:14:03 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

import { connect } from 'react-redux';
import reduxscr_action from './reduxscr_action';
import reduxscr_cmpt_userlist from './reduxscr_cmpt_userlist';

const mapStateToProps = (state) => {
  return {
    reduxscr_rdu_userarr : state.reduxscr_rdu_userarr
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      console.log('userlist click');
    }
  };
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxscr_cmpt_userlist);
