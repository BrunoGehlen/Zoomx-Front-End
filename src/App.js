import './App.css'
import { 
  useDispatch, 
  useSelector 
} from 'react-redux'
import {
  getCityListThunk 
} from './store/modules/cities/thunks'
import {  
  getStateListThunk 
} from './store/modules/states/thunks'

import State from "./components/state"
import City from "./components/city"
import CreateStateForm from "./components/createStateForm"
import CreateCityForm from "./components/createCityForm"
import DefaultButton from "./components/DefaultButton"

const App = () => {

  const dispatch = useDispatch()
  const cities = useSelector(state => state.cities)
  const states = useSelector(state => state.states)

  const getCities = () => {
    dispatch(getCityListThunk())

  }

  const getState = () => {
    dispatch(getStateListThunk())

  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Novo Estado</h3>   
             
        <CreateStateForm/>
        <h3>Nova Cidade</h3>
        <CreateCityForm/>

        <DefaultButton text={'Ver cidades'} onClick={() => getCities()}>
        </DefaultButton>

        <div>
          { cities.list?.map((city, index) => 
            <City 
              key={index}
              cityName={city.name}
              cityId={city._id}
              stateId={city.stateId}
              creationDate={city.creationDate}
              lastAlterationDate={city.lastAlterationDate}
            />
          )}
        </div>

        <DefaultButton 
          text={'Ver estados'} 
          onClick={getState}
        />

        <div>
          { states.list?.map((state, index) => 
            <State 
              key={index}
              stateName={state.name} 
              stateId={state._id} 
              stateAbreviation={state.abreviation}></State>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
