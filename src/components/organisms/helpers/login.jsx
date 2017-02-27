import {setCookie}     from 'utils/cookie';
import {ERROR_STATUSES} from 'constants/errorStatuses';
import {FAILED_TO_LOGIN, UNEXPECTED_ERROR} from 'constants/errorMessages';

const loginHelper = {
  doLogin: () => {
    window.location.href = 'management/home';
  },

  getError: (errorStatus) => {
    let error = false;
    switch(errorStatus) {
      case ERROR_STATUSES.notFound:
        error = FAILED_TO_LOGIN;
        break;
      default:
        error = UNEXPECTED_ERROR;
        break;
    }

    return error;
  },
};

export default loginHelper;
