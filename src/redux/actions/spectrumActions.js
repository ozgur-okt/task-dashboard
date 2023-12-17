import axios from 'axios'
import { REST_API_URL, WEB_SOCKET_URL } from '../../constants/index'

let ws = null
export const getSpectrumFromWebSocket = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING', payload: true })
    dispatch({ type: 'ERROR', payload: null })

    ws = new WebSocket(WEB_SOCKET_URL)
    ws.onopen = () => {
      //console.log('connected')
    }
    ws.onmessage = (evt) => {
      dispatch({
        type: 'GET_SPECTRUM_FROM_WEB_SOCKET',
        payload: JSON.parse(evt.data),
      })
      dispatch({ type: 'LOADING', payload: false })
    }
    ws.onerror = (error) => {
      dispatch({ type: 'ERROR', payload: error })
    }
    ws.onclose = () => {
      //console.log('disconnected')
    }
  }
}

export const getSpectrumFromRestAPI = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING', payload: true })
    dispatch({ type: 'ERROR', payload: null })
    axios.get(`${REST_API_URL}/SpectrumStatus`)
      .then((res) => {
        dispatch({ type: 'LOADING', payload: false })
        dispatch({
          type: 'GET_SPECTRUM_FROM_REST_API',
          payload: res.data,
        })
        if (res.data.isActionRequired || res.data.isAscending) {
          setTimeout(() => {
            dispatch({ type: 'RESET_FLAGS' })
          }, 5000)
        }
      })
      .catch((error) => {
        dispatch({ type: 'LOADING', payload: false })
        dispatch({ type: 'ERROR', payload: error })
      })
  }
}

export const stopWebSocket = () => {
  return (dispatch) => {
    if (ws) {
      ws.close()
      ws = null
    }
    dispatch({
      type: 'STOP_WEBSOCKET',
    })
  }
}


export const actOnSpectrum = () => {
  return (dispatch) => {
    axios.post(`${REST_API_URL}/ActOnSpectrum`)
      .then((res) => {
        dispatch({
          type: 'ACT_ON_SPECTRUM',
          payload: res.data,
        })
      })
      .catch((error) => {
        //Due to assignment was not clear, post request to this endpoint always causes error.
        //dispatch({ type: 'ERROR', payload: error })
      })
  }
}
