import { IUserResponse } from 'types/models/User';

export const INITIALIZE = 'INITIALIZE';
export const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';
export const INITIALIZE_FAILED = 'INITIALIZE_FAILED';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';

export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILED = 'SIGN_OUT_FAILED';

export const RESET_STATE = 'RESET_STATE';

export interface AuthAction {
  payload: IUserResponse;
  type: string;
  error?: string;
}
