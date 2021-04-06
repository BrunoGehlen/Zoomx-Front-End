import DataBase from "../../../services/axios"
import { getCityList, getCityById } from "./actions";

export const getCityListThunk = ( options ) => async ( dispatch ) => {
    
    let cityList = []
  
    try {
      
        const response = await DataBase.get(`/cities/`)
        cityList = [ ...response.data ]
        dispatch(getCityList( cityList ))  
    
    } catch (err) {
        console.log(err)

    }
}

export const getCityByIdThunk = ( cityId ) => async ( dispatch ) => {
    
    let fetchedCity = {}
  
    try {
        
        const response = await DataBase.get(`/cities/${ cityId }`)
        fetchedCity = response.data
        dispatch(getCityById( fetchedCity ))

    } catch ( err ) {
        console.log( err )
    
    }
}