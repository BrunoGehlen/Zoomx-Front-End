import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { 
    deleteState, 
    updateState 
  } from '../../requests/stateRequests'
import DefaultButton from '../DefaultButton'
import {
    StateStyles
} from './style'

const State = ({
    stateName, 
    stateId, 
    stateAbreviation, 
    creationDate, 
    lastAlterationDate,
    _id}) => {
    
    const dispatch = useDispatch()

    const [stateData, setStateData] = useState({
        name: stateName,
        abreviation: stateAbreviation
    })

    return (
            <StateStyles>
                <div>{stateName}, {stateAbreviation}</div>
                <div>Data de criação: {new Date(creationDate).toLocaleDateString()}</div>
                <div>Data da última alteração: {new Date(lastAlterationDate).toLocaleDateString()}</div>
                <div>{ _id }</div>         
                <form>
                    <label>
                        Novo nome:
                        <input 
                        type="text" 
                        name="State name" 
                        onChange={(e) => setStateData({
                            name: e.target.value,
                            abreviation: stateData.abreviation
                        })} />
                    </label>
                    
                    <label>
                        Nova Abreviação:
                        <input
                            type="text" 
                            name="Abreviation" 
                            onChange={(e) => setStateData({
                                name: stateData.name,
                                abreviation: e.target.value
                            })} />
                        </label>

                </form>  
            <DefaultButton 
                danger
                text={'Deletar estado'}
                onClick={() => dispatch(deleteState(stateId))}
            />
            <DefaultButton 
                text={'Atualizar estado'}
                onClick={() => dispatch(updateState(stateId, stateData))}
            />
        </StateStyles>
    )
}

export default State