import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from "redux";

import thunk from "redux-thunk";

import statesReducer from "./modules/states/statesReducer";
import citiesReducer from "./modules/cities/citiesReducer";

const reducers = combineReducers({
    states: statesReducer,
    cities: citiesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
