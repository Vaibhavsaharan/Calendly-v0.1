import {ActionTypes} from '../constants/action-types';
import EventService from '../../services/eventService';

export const getAllEvents = (userId) => async (dispatch) => {
    try{
        const res = await EventService.getAll({userId});

        dispatch({
            type : ActionTypes.GET_ALL_EVENTS,
            payload : res.data,
        })

        return Promise.resolve(res.data);
    }
    catch (err){
        return Promise.reject(err);
    }
}

export const getEvent = (eventId) => async (dispatch) => {
    try{
        const res = await EventService.get({eventId});

        dispatch({
            type : ActionTypes.GET_EVENT,
            payload : res.data,
        })

        return Promise.resolve(res.data);
    }
    catch (err){
        return Promise.reject(err);
    }
}


export const createEvent = (eventInfo) => async (dispatch) =>{
    console.log(eventInfo)
    try{
        const res = await EventService.create({eventInfo});

        dispatch({
            type : ActionTypes.CREATE_EVENT,
            payload : res.data,
        })

        return Promise.resolve(res.data);
    }
    catch (err){
        return Promise.reject(err);
    }
};