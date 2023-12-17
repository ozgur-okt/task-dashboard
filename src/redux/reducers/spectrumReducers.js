import { formatStatusMessages } from '../../utils/formatStatusMessages'
import {
  ERROR,
  GET_SPECTRUM_FROM_REST_API,
  GET_SPECTRUM_FROM_WEB_SOCKET,
  LOADING,
  RESET_FLAGS,
  STOP_WEBSOCKET,
  ACT_ON_SPECTRUM
} from '../actionTypes/spectrumActionTypes'

const initialState = {
  spectrum: null,
  isSocketConnected: false,
  statusMessages: [],
  previousSpectrum: null,
  isActionRequired: false,
  isAscending: false,
  loading: false,
  error: null,
}

const spectrumReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_SPECTRUM_FROM_WEB_SOCKET:
    return {
      ...state,
      previousSpectrum: state.spectrum,
      spectrum: action.payload,
      isSocketConnected: true,
      isActionRequired: action.payload.IsActionRequired,
      isAscending: action.payload.IsAscending,
      statusMessages: formatStatusMessages(action.payload.StatusMessage, state)
    }
  case STOP_WEBSOCKET:
    return {
      ...state,
      isSocketConnected: false,
      isActionRequired: false,
      isAscending: false,
    }
  case GET_SPECTRUM_FROM_REST_API:
    return {
      ...state,
      previousSpectrum: state.spectrum,
      spectrum: action.payload,
      isSocketConnected: false,
      isActionRequired: action.payload.isActionRequired,
      isAscending: action.payload.isAscending,
      statusMessages: formatStatusMessages(action.payload.statusMessage, state)
    }
  case LOADING:
    return {
      ...state,
      loading: action.payload,
    }
  case ERROR:
    return {
      ...state,
      error: action.payload,
    }
  case RESET_FLAGS:
    return {
      ...state,
      isActionRequired: false,
      isAscending: false,
    }
  case ACT_ON_SPECTRUM:
    return {
      ...state,
      // Due to what returns from the API was not clear in the assignment, I assumed that it returns the same object as the GET_SPECTRUM_FROM_REST_API action.
    }
  default:
    return state
  }
}

export default spectrumReducer