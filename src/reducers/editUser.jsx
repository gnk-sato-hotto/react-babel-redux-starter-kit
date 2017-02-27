/**
  Author: g.satoh
  CreatedAt: 2016/12/21
  
*/

import _ from 'lodash';
import User from 'objects/user';

const initialState = {
  user: new User(),
};

export default function editUser(state = initialState, action) {

  let currentState = _.cloneDeep(state);
  switch(action.type) {
    case 'SET_USER':
      currentState.user = action.user;
      return currentState;

    default:
      return state;
  }
}
