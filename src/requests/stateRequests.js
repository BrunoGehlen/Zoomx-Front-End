import DataBase from "../services/axios"
import { getStateListThunk } from "../store/modules/states/thunks";

export const createState = newState => async dispatch => {

    try {
        const response = await DataBase.post(`/states`, newState)
        dispatch(getStateListThunk())
    } catch (err) {
        console.log(err);
    }
}

export const deleteState = (stateId) => async dispatch => {

    try {
        const response = await DataBase.delete(`/states/${stateId}`)
        dispatch(getStateListThunk())
        
    } catch (err) {
        console.log(err)
    }
}

export const updateState = (stateId, stateInfo) => async dispatch => {

    try {
        const response = await DataBase.patch(`/states/${stateId}`, stateInfo)
        dispatch(getStateListThunk())
    } catch (err) {
        console.log(err)
    }
}