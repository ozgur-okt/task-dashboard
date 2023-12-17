import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { thunk } from 'redux-thunk'
import rootReducer from './reducers/persistReducer.js'

const composeEnhancers = getComposeEnhancers()

function getComposeEnhancers() {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
  return compose
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)
