import {applyMiddleware, combineReducers, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import { graphDataReducer } from "./graphDataReducer"

const rootReducer = combineReducers({
    graphData: graphDataReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))