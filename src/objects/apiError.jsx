export default class ApiError {
  constructor() {
  }

  includeAxiosError(axiosError) {
    const _status = axiosError.response.status;
    const message = axiosError.response.data.message;
    this.setStatus(_status);
    this.setMessage(message);
  }

  includeCognitoError(error) {
    this.setStatus(error.statusCode);
    this.setMessage(error.message);
  }

  setMessage(message) {
    this.message = message;
  }
  getMessage() {
    return this.message;
  }

  setStatus(_status) {
    this.status = _status;
  }
  getStatus() {
    return this.status;
  }
}
