import { combineReducers } from 'redux'
import authReducer from './authReducer'
import flightReducer from './flightReducer'

const rootReducer = combineReducers({
    fight: flightReducer,
    auth: authReducer
})

export default rootReducer