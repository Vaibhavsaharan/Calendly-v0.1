import {ActionTypes} from '../constants/action-types';
  
const initialState = {};

function userReducer(user = initialState, action) {
  const { type, payload } = action;

switch (type) {
  case ActionTypes.GET_AUTH_USER:
    return payload;

  case ActionTypes.GET_ALL_USER:
    return payload;

  case ActionTypes.CREATE_USER:
		return [...user, payload];

	default:
	return user;
}
};

export default userReducer;