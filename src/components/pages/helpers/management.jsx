import {ERROR_STATUSES} from 'constants/errorStatuses';
import {
  UNAUTHORIZATION,
  FORBIDDEN,
  UNEXPECTED_ERROR_LOGOUT,
} from 'constants/errorMessages';

const instagramServiceHelper = {

  // クライアント名を返す
  getClientName: (currentUser) => {
    return currentUser.client.name;
  },

  // ユーザ名を返す
  getUserName: (currentUser) => {
    return currentUser.user.name;
  },

  // エラータイトルやエラー body を返す
  getError: (status) => {
    let error = {};
    switch(status) {
      case ERROR_STATUSES.unauthorized:
        error = UNAUTHORIZATION;
        break;

      case ERROR_STATUSES.forbidden:
        error = FORBIDDEN;
        break;

      default:
        error = UNEXPECTED_ERROR_LOGOUT;
        break;
    }

    return error;
  },
};

export default instagramServiceHelper;
