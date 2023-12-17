import React, { useState, useEffect, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { chart, stroke, grid, xAxis, markers, yAxis } from './commonChartOptions.js'
import { generateChartOptions } from '../../utils/generateChartOptions.js'
import { keysToLowerCase } from '../../utils/keysToLowerCase.js'
import Chart from 'react-apexcharts'

const Charts = ({ name }) => {
  const spectrum = useSelector(state => state.spectrum.spectrum)
  const [current, setCurrent] = useState(generateChartOptions(name, yAxis, chart, stroke, grid, xAxis, markers))

  const createChartData = useCallback((sensorData) => {
    if (!sensorData) return

    sensorData = keysToLowerCase(sensorData)

    let yAxisValues = current.series[0].data
    if (yAxisValues.length > 30) yAxisValues.shift()
    yAxisValues.push(sensorData[name].toFixed(0))
    let tempSeries = current.series
    tempSeries[0].current = yAxisValues

    let date = new Date().toLocaleTimeString()
    let xAxisDates = current.options.xaxis.categories
    if (xAxisDates.length > 30) xAxisDates.shift()
    xAxisDates.push(date)

    let tempOptions = current.options
    tempOptions.xaxis.categories = xAxisDates

    if (name === 'altitude') {
      tempOptions.yaxis.max = Math.max(...yAxisValues) + 35
      tempOptions.yaxis.min = Math.min(...yAxisValues) - 35
    }

    setCurrent({
      options: tempOptions,
      series: tempSeries
    })
  }, [current.series, current.options, name])

  useEffect(() => {
    createChartData(spectrum)
  }, [createChartData, spectrum])

  return (
    <Chart
      key={Math.random()}
      options={current.options}
      series={current.series}
      type='line'
      height='33%'
      width='100%'
    />
  )
}

Charts.propTypes = {
  name: PropTypes.string.isRequired,
}

export default memo(Charts)