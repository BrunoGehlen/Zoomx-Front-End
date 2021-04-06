import { 
    GETCITYLIST, 
    GETCITYBYID 
} from './actionsType'

const citiesList = {
    list: []
}

const citiesReducer = ( state = citiesList, action ) => {

    const { type, list, city } = action

    switch ( type ) {
        case GETCITYLIST:
            return {
                list: [ ...list ]
            }

        case GETCITYBYID:
            return {
                city: [ city ]
            }

        default:
            return state
    }
}

export default citiesReducer