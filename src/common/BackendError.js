import CustomError from 'common/CustomError';

export const USER_NOT_FOUND = 'BACK-USER_NOT_FOUND';
export const UNCOMPLETE_USER_PROFILE = 'UNCOMPLETE_USER_PROFILE';

class BackendError extends CustomError {
  constructor(message, code) {
    super(message, code);
    this.name = 'BackendError';
  }
}

export default BackendError;
