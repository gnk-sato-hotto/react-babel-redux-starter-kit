import _ from 'lodash';
import axios      from 'axios';

import ApiError   from 'objects/apiError';
import {ERROR_STATUSES} from 'constants/errorStatuses';

export const asyncHelper = {
  handleError(err, errorCallback) {
    console.log("Api error", err);

    const apiError = new ApiError();

    if(!err.response) {
      apiError.setStatus(ERROR_STATUSES.unauthorized);
    }else {
      apiError.includeAxiosError(err);
    }
    if(_.isFunction(errorCallback)) {
      errorCallback(apiError);
    }
  },

  getAxiosInstance(timeout=1000) {
    const url = 'https://api.url';
    const headers = {
      'Content-Type':  'application/json',
      'Authorization': 'token',
    };
    const instance = axios.create({
      baseURL: url,
      timeout,
      headers,
    });
  },

};
