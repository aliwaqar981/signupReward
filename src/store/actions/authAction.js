import { USER_DATA } from './actionTypes';

export const saveUser = user => {
  return {
    type: USER_DATA,
    data: user
  }
}