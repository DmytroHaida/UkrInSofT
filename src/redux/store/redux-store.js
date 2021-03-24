import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import PizzaReducer from '../reducers/PizzaReducer'

const reducers = combineReducers({
    pizzaItems: PizzaReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store