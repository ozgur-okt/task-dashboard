export const chart = {
  redrawOnParentResize: true,
  redrawOnWindowResize: true,
  animations: {
    enabled: false,
    easing: 'easeinout',
    speed: 100,
    animateGradually: {
      enabled: true,
      delay: 10
    },
    dynamicAnimation: {
      enabled: true,
      speed: 500
    }
  },
  toolbar: {
    show: false
  },
  background: {
    color: '#ffffff00'
  }
}

export const stroke = {
  curve: 'straight',
  width: 3,
}

export const grid = {
  show: true,
  borderColor: '#585378',
  strokeDashArray: 2,
  position: 'back',
}

export const xAxis = {
  type: 'category',
  categories: [],
  tickAmount: undefined,
  tickPlacement: 'between',
  min: undefined,
  max: undefined,
  range: undefined,
  floating: false,
  decimalsInFloat: undefined,
  overwriteCategories: undefined,
  position: 'bottom',
  labels: {
    show: false,
  },
  axisBorder: {
    show: true,
    color: '#FFF',
    height: 1,
    width: '100%',
    offsetX: -2
  },
  axisTicks: {
    show: false,
  },
}

export const yAxis = {
  show: true,
  showAlways: true,
  showForNullSeries: true,
  tickAmount: 6,
  forceNiceScale: false,
  floating: false,
  decimalsInFloat: undefined,
  labels: {
    show: true,
    align: 'right',
    minWidth: 90,
    maxWidth: 90,
    style: {
      colors: '#FFF',
      fontSize: '12px',
      fontWeight: 400,
      cssClass: 'apexcharts-yaxis-label',
    },
    offsetX: 0,
    offsetY: 0,
    rotate: 0,
  },
  axisBorder: {
    show: true,
    color: '#FFF',
    width: 1,
    offsetX: -3
  },
  axisTicks: {
    show: false,
  },
  title: {
    rotate: -90,
    offsetY: 0,
    style: {
      color: '#FFF',
      fontSize: '16px',
      fontWeight: 400,
      cssClass: 'apexcharts-yaxis-title',
    },
  },
  crosshairs: {
    show: true,
    position: 'back',
    stroke: {
      color: '#FFF',
      width: 1,
      dashArray: 3,
    },
  },
  tooltip: {
    enabled: false,
    offsetX: 0,
  },
}

export const markers = {
  size: 2,
  strokeWidth: 2,
  strokeOpacity: 0.9,
  strokeDashArray: 0,
  fillOpacity: 1,
  discrete: [],
  shape: 'circle',
  radius: 2,
  offsetX: 0,
  offsetY: 0,
  onClick: undefined,
  onDblClick: undefined,
  showNullDataPoints: true,
  hover: {
    size: undefined,
    sizeOffset: 3
  }
}
