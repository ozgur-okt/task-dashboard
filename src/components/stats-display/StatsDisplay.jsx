import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { keysToLowerCase } from '../../utils/keysToLowerCase'
import downArrow from '../../assets/down-arrow.svg'
import upArrow from '../../assets/up-arrow.svg'
import './stats-display.scss'


const StatsDisplay = ({ name }) => {
  let newStats = useSelector(state => state.spectrum.spectrum)
  newStats = newStats ? keysToLowerCase(newStats) : {}

  let previousStats = useSelector(state => state.spectrum.previousSpectrum)
  previousStats = previousStats ? keysToLowerCase(previousStats) : {}

  const increment = newStats && previousStats && newStats[name] > previousStats[name]
  const percentage = newStats && previousStats && Math.abs(((newStats[name] - previousStats[name]) / previousStats[name]) * 100).toFixed(2)
  const current = newStats && newStats[name] ? newStats[name].toFixed(2) : 'NA'
  const unit = name === 'temperature' ? ' °C' : name === 'velocity' ? ' m/s' : ' m'

  const renderStats = (statName, unit) => (
    <div className='stats'>
      <h5>{statName.toUpperCase()}</h5>
      <h1 className={increment ? 'increment' : 'decrease'} >
        {current + unit}
      </h1>
      {
        newStats && previousStats && newStats[statName] && previousStats[statName] && (
          <p className={increment ? 'change increment' : 'change decrease'}>
            <img src={increment ? upArrow : downArrow} alt={increment ? 'upArrow' : 'downArrow'} />
            {percentage + ' %'}
          </p>
        )
      }
    </div>
  )

  return (
    <>
      {renderStats(name, unit)}
    </>
  )
}

StatsDisplay.propTypes = {
  name: PropTypes.string.isRequired,
}

export default memo(StatsDisplay)