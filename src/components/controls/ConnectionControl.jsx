import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, getSpectrumFromRestAPI, getSpectrumFromWebSocket, stopWebSocket } from '../../redux/actions/spectrumActions'
import play from '../../assets/icons/play.svg'
import stop from '../../assets/icons/stop.svg'
import refresh from '../../assets/icons/refresh.svg'
import '../../styles/components/controls/connection-control.scss'

const ConnectionControl = () => {
  const dispatch = useDispatch()
  let { isSocketConnected, loading, error: connectionError } = useSelector(state => state.spectrum)
 

  return (
    <div className='container'>
      <button className='connection' onClick={() => dispatch(isSocketConnected ? stopWebSocket() : getSpectrumFromWebSocket())}>
        <img src={isSocketConnected ? stop : play} alt={isSocketConnected ? 'stop' : 'play'} />
      </button>
      <div className='fetching-state'>
        <h3 className={connectionError ? 'error visible' : 'error'}>ERROR</h3>
        <h3 className={loading ? 'loading visible' : 'loading'}>LOADING</h3>
      </div>
      <button className={isSocketConnected ? 'connection disabled' : 'connection'} onClick={() => dispatch(getSpectrumFromRestAPI())}>
        <img src={refresh} alt='refresh' />
      </button>
    </div>
  )
}

export default ConnectionControl