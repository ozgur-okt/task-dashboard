import { useSelector } from 'react-redux'
import './action-required-signal.scss'

const ActionRequiredSignal = () => {
  const isActionRequired = useSelector(state => state.spectrum.isActionRequired)
  return (
    <div className={`action-required ${isActionRequired ? 'flash' : ''}`}>
      ACTION REQUIRED: {isActionRequired ? 'YES' : 'NO'}
    </div>
  )
}

export default ActionRequiredSignal