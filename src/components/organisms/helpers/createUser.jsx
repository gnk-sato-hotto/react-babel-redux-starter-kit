import _ from 'lodash';
import {USER_NAME_NUM_MAX} from 'constants/limits';
import {FORMAT_ERROR, CREATE_USER} from 'constants/errorMessages';
import {
  isNumber,
  currentUrl,
  isValidEmail,
  containsEmoji,
  containsSpecialChar,
} from 'nkdash';

export const createUser = {

  // ユーザ名 validation
  nameValidator(userName) {
    const name   = 'ユーザ名'
    const errors = [];
    if(userName.length == 0) {
      return FORMAT_ERROR.requireInput(name).messages;
    }

    if(userName.length > USER_NAME_NUM_MAX) {
      errors.push(
        _.head(FORMAT_ERROR.overUpperLimit(name, USER_NAME_NUM_MAX).messages)
      );
    }
    if(containsEmoji(userName)) {
      errors.push(_.head(FORMAT_ERROR.invalidEmoji(name).messages));
    }
    return errors;
  },

  // email の validation
  emailValidator(email) {
    if(email.length == 0) {
      return FORMAT_ERROR.requireInput('Email ').messages;
    }

    if(!isValidEmail(email)) {
      return FORMAT_ERROR.email.messages;
    }
    return [];
  },

  // 権限の validation
  roleValidator(roles, client) {
    if(!client) {
      return [];
    }

    if(_.includes(roles, 'leader')) {
      if(!client.leaderCreatable()) {
        return CREATE_USER.unableCreateLeader.messages;
      }
    }

    if(!client.memberCreatable()) {
      return CREATE_USER.unableCreateMember.messages;
    }

    return [];
  },
};
