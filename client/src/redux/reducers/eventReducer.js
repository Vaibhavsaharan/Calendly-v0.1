import {ActionTypes} from '../constants/action-types';
  
const initialState = [];

function eventReducer(events = initialState, action) {
  const { type, payload } = action;

switch (type) {
    case ActionTypes.GET_ALL_EVENTS:
        return payload;

    case ActionTypes.GET_EVENT:
        return payload;

    case ActionTypes.CREATE_EVENT:
        return [...events, payload];

    default:
    return events;
}
};

export default eventReducer;