import { useSelector } from 'react-redux'
import '../../styles/components/monitors/status-messages.scss'

const StatusMessages = () => {
  const { isActionRequired, statusMessages } = useSelector(state => state.spectrum)

  return (
    <div className='messages'>
      {
        Array.isArray(statusMessages) && statusMessages.map((item, index) => (
          <div
            key={index}
            className={index === 0 ? (isActionRequired ? 'message action' : 'message normal') : 'message small'}
          >
            <p className='text' >{item.message}</p>
            <p className='text'>{item.timestamp}</p>
          </div>
        ))
      }
    </div>
  )
}

export default StatusMessages