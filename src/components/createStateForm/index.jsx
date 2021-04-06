import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { 
    createState, 
} from '../../requests/stateRequests'
import DefaultButton from '../DefaultButton'
import DefaultInput from '../DefaultInput'

import {
  CreateCityFormStyles
} from './style'

const CreateStateForm = () => {
  
    const dispatch = useDispatch()

    const [ newStateData, setNewStateData ] = useState({
        name:'',
        abreviation:''
    })
      
    return (
        <CreateCityFormStyles>        
            <form>
              <div>
                <label>
                  Nome do estado:
                  <DefaultInput 
                    type="text" 
                    name="State name" 
                    onChange={(e) => setNewStateData({
                      name: e.target.value,
                      abreviation: newStateData.abreviation
                    })} />
                </label>
              </div>
              <div>
                <label>
                  Abreviação:
                  <DefaultInput 
                    type="text" 
                    name="Abreviation" 
                    onChange={(e) => setNewStateData({
                      name: newStateData.name,
                      abreviation: e.target.value
                    })} />
                </label>
              </div>
            </form>
            <DefaultButton text={'Criar estado'} onClick={() => dispatch(createState(newStateData))}
              >
            </DefaultButton>
        </CreateCityFormStyles>
    )
}

export default CreateStateForm