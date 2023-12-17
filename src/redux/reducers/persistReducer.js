import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import spectrumReducer from './spectrumReducers'

const persistConfig = {
  key: 'ozgur-oktay-dashboard',
  storage,
}

const rootReducer = combineReducers({
  spectrum: spectrumReducer,
})

export default persistReducer(persistConfig, rootReducer)