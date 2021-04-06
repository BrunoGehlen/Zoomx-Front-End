import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { 
    createCity
} from '../../requests/citiesRequests'
import DefaultButton from '../DefaultButton'
import DefaultInput from '../DefaultInput'

import { 
  CreateStateFormStyles 
} from './style'

const CreateCityForm = () => {

    const dispatch = useDispatch()

    const [ newCityData, setNewCityData ] = useState({
        name:'',
        cityId:''
      })

    return (
        <CreateStateFormStyles>
            <form>
              <div>
                <label>
                  Nome da cidade:
                  <DefaultInput 
                    type="text" 
                    name="City name" 
                    onChange={(e) => setNewCityData({
                      name: e.target.value,
                      stateId: newCityData.stateId
                    })} />
                </label>
              </div>
              <div>
                <label>
                  Estado:
                  <DefaultInput 
                    type="text" 
                    name="Abreviation"
                    onChange={(e) => setNewCityData({
                      name: newCityData.name,
                      stateId: e.target.value
                    })} />
                </label>
              </div>
            </form> 
            <DefaultButton text={'Criar cidade'}onClick={() => dispatch(createCity(newCityData))}
                >
            </DefaultButton>
        </CreateStateFormStyles>
    )
}


export default CreateCityForm