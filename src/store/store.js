import { createStore, combineReducers } from 'redux'
import articleReducers from './reducer'

const reducer = combineReducers ({ articleReducers })

const store = createStore(
    reducer,
)

export default store