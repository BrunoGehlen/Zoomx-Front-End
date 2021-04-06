import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    deleteCity, 
    updateCity
  } from '../../requests/citiesRequests'
import DefaultButton from '../DefaultButton'

import {
    CityStyles
} from './style'

const City = ({cityName, cityId, stateId, creationDate, lastAlterationDate }) => {
    
    const dispatch = useDispatch()

    const [cityData, setCityData] = useState({
        name: cityName
    })

    return (
            <CityStyles>
                <h2>{ cityName }</h2>
                <h3>Data de criação: { new Date(creationDate).toLocaleDateString() }</h3>
                <p>Data da última alteração: { new Date(lastAlterationDate).toLocaleDateString() }</p>
                <p>ID do estado: { stateId }</p>
                <form>
                    <label>
                        Novo nome:
                        <input 
                            type="text" 
                            name="State name" 
                            onChange={(e) => setCityData({
                                name: e.target.value
                            })} />
                    </label>
                </form>  
            
            <DefaultButton 
                danger
                text={'Deletar cidade'} 
                onClick={() => dispatch(deleteCity(cityId)
                    )}>
            </DefaultButton>

            <DefaultButton 
                text={'Atualizar nome'} 
                onClick={() => dispatch(updateCity(cityId, cityData))
                }></DefaultButton>
        </CityStyles>
    )
}

export default City