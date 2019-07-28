import { USER_DATA } from '../actions/actionTypes';

const initialState = {
  userName: '',
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_DATA:
      return {
        ...state,
        userName:action.data
      };
    default:
      return state;
  }
}

export default authReducer;