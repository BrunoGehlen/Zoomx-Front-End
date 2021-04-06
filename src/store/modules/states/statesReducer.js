import { GETSTATELIST, GETSTATEBYID } from './actionsType'

const statesList = {
    list: []
}

const statesReducer = ( state = statesList, action ) => {
    
    const { type, list, DBState } = action

    switch ( type ) {
        case GETSTATELIST:
            return {
                list: [ ...list ]
            }

        case GETSTATEBYID:
            return {
                city: [ DBState ]
            }
    
        default:
            return state
    }
}

export default statesReducer