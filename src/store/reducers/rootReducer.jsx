import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;