import { useSelector } from 'react-redux'
import { ReactComponent as Ascending } from '../../assets/icons/ascending.svg'
import '../../styles/components/signals/ascending-signal.scss'

const AscendingSignal = () => {
  const isAscending = useSelector(state => state.spectrum.isAscending)
  const arrowsCount = 5

  return (
    <div className='ascending-state'>
      <h1 className={isAscending ? 'label active' : 'label'}>ASCENDING</h1>
      <div className='ascending-arrows'>
        {Array(arrowsCount).fill().map((_, index) => (
          <Ascending key={index} className={isAscending ? 'ascending-arrow' : 'stable-arrow'} />
        ))}
      </div>
    </div>
  )
}

export default AscendingSignal