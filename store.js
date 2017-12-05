import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import mainReducer from './reducers'

const configureStore = (initialState = {}) => createStore(
  mainReducer,
  initialState,
  compose(
    applyMiddleware(thunk, logger)
  )
)

export default configureStore
