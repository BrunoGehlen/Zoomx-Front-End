import DataBase from "../../../services/axios"
import { getStateList, getStateById } from "./actions";

export const getStateListThunk = () => async ( dispatch ) => {

    let stateList = []

    try {

        const response = await DataBase.get(`/states/`)

        stateList = [ ...response.data ]

        dispatch(getStateList( stateList ))

    } catch (err) {
        console.log(err)

    }
}

export const getStateByIdThunk = ( stateId ) => async ( dispatch ) => {

    let fetchedState = {}
  
    try {

        const response = await DataBase.get(`/states/${ stateId }`)
        fetchedState = response.data
        dispatch(getStateById( fetchedState ))

    } catch ( err ) {
        console.log( err )

    }
  }
