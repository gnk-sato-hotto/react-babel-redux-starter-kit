/**
  Author: g.satoh
  CreatedAt: 2017/02/16
  
*/

import { connect } from 'react-redux'

// component
import EditUser from 'components/organisms/editUser';

// actions
import {
  setUser,
} from 'actions/editUser';

// objects
import User   from 'objects/user';

function mapStateToProps(state) {
  return state.editUser;
}

function mapDispatchToProps(dispatch) {

  return {
    fetchUser: () => {
      const user = new User(6);
      user.setName('Jack');
      dispatch(setUser(user));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
