import _ from 'lodash';
import axios from 'axios';

import ApiError from 'objects/apiError';
import {asyncHelper} from 'apis/asyncHelper';


// get data
export const httpGet = (path, params, success, error, timeout=30000) => {
  const instance = asyncHelper.getAxiosInstance(timeout);
  instance.get(path, {
    params,
  })
  .then((response) => {
    console.log(response)
    if(_.isFunction(success)) {
      success(response);
    }
  })
  .catch((err) => {
    asyncHelper.handleError(err, error);
  });
};

// post data
export const httpPost = (path, dataObj, success, error, timeout=30000) => {
  const instance = asyncHelper.getAxiosInstance(timeout);
  instance.post(path, dataObj)
  .then((response) => {
    console.log(response)
    if(_.isFunction(success)) {
      success(response);
    }
  })
  .catch((err) => {
    asyncHelper.handleError(err, error);
  });
}

// put data
export const httpPut = (path, dataObj, success, error, timeout=30000) => {
  const instance = asyncHelper.getAxiosInstance(timeout);
  instance.put(path, dataObj)
  .then((response) => {
    console.log(response)
    if(_.isFunction(success)) {
      success(response);
    }
  })
  .catch((err) => {
    asyncHelper.handleError(err, error);
  });
};

// delete data
export const httpDelete = (path, success, error, timeout=30000) => {
  const instance = asyncHelper.getAxiosInstance(timeout);
  instance.delete(path)
  .then((response) => {
    console.log(response)
    if(_.isFunction(success)) {
      success(response);
    }
  })
  .catch((err) => {
    asyncHelper.handleError(err, error);
  });
};
