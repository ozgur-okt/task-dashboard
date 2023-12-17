export const generateChartOptions = (name, yAxis, chart, stroke, grid, xAxis, markers) => {
  const color = '#46a2e0' //blue
  const title = name.toUpperCase()
  const formatter = name === 'altitude' ? (value) => { return value ? value.toFixed(0) + ' m' : '' } : (value) => { return value + (name === 'temperature' ? ' °C' : ' m/s') }
  const minMax = name === 'altitude' ? { min: -40000, max: 40000 } : name === 'temperature' ? { min: -90, max: 90 } : { min: -150, max: 150 }

  return {
    options: {
      chart: chart,
      stroke: {
        ...stroke,
        colors: [color]
      },
      grid: grid,
      xaxis: xAxis,
      yaxis: {
        ...yAxis,
        ...minMax,
        labels: {
          ...yAxis.labels,
          formatter: formatter
        },
        title: {
          ...yAxis.title,
          text: title,
          offsetX: name === 'temperature' ? -15 : 0,
        },
      },
      markers: {
        ...markers,
        colors: [color],
        strokeColors: color,
      },
      theme: {
        mode: 'dark'
      }
    },
    series: [
      {
        name: title,
        color: color,
        data: [],
      },
    ]
  }
}