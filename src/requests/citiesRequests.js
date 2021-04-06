import DataBase from "../services/axios"
import { getCityListThunk } from "../store/modules/cities/thunks";

export const createCity = newCity => async dispatch =>{

    try {
      const response = await DataBase.post(`/cities`, newCity)
      dispatch(getCityListThunk())

    } catch (err) {
      console.log(err);
    }
}

export const deleteCity = cityId => async dispatch => {

    try {
      const response = await DataBase.delete(`/cities/${cityId}`)

      dispatch(getCityListThunk())
    } catch (err) {
      console.log(err);
    }
}

export const updateCity = (cityId, cityInfo) => async dispatch => {

    try {
        const response = await DataBase.patch(`/cities/${cityId}`, cityInfo)
        dispatch(getCityListThunk())
    } catch (err) {
      console.log(err)
    }
}