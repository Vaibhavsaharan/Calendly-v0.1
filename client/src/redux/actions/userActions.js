import {ActionTypes} from '../constants/action-types';
import UserService from '../../services/userService';

export const getUser = (email) => async (dispatch) => {
    try{
        const res = await UserService.getAuthUser({email});
        dispatch({
            type : ActionTypes.GET_AUTH_USER,
            payload : res.data,
        })

        return Promise.resolve(res.data);
    }
    catch (err){
        return Promise.reject(err);
    }
};

export const createUser = (userInfo) => async (dispatch) =>{
    try{
        const res = await UserService.createUser({userInfo});

        dispatch({
            type : ActionTypes.CREATE_USER,
            payload : res.data,
        })

        return Promise.resolve(res.data);
    }
    catch (err){
        return Promise.reject(err);
    }
};
