import tool from './chart-tool'

class Chart {
  constructor () {
    this.echarts = window.echarts
    this.lineOptions = {
      tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: 'rgba(214, 29, 40, 1)',
        axisPointer: {
          type: 'line',
          snap: true,
          lineStyle: {
            type: 'dashed',
            color: '#D61D28'
          }
        },
        formatter: function (param) {
          var value = param[0]
          return '日期：' + value.axisValue + '<br/>指数收益价：' + value.value
        },
        extraCssText: 'border-radius: 4px;',
        padding: [10, 16]
      },
      grid: {
        left: 40,
        right: 0,
        top: 20,
        bottom: 40
      },
      xAxis: {
        type: 'category',
        triggerEvent: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 10,
          color: '#999',
          fontSize: 10
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 10.7,
          color: '#999',
          fontSize: 10
        },
        splitLine: {
          lineStyle: {
            color: '#bdbec0',
            type: 'dashed'
          }
        }
      }
    }
    this.pieOptions = {
      color: ['#2E8ED2', '#FCD432', '#F3AC47', '#2678E4', '#5AA8DC'],
      legend: {
        orient: 'vertical',
        type: 'scroll',
        left: 'left',
        top: 'middle',
        itemGap: 12,
        itemWidth: 13,
        itemHeight: 13,
        textStyle: {
          color: '#4e4e4e'
        }
      },
      series: {
        type: 'pie',
        radius: 50,
        center: ['75%', '50%'],
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        }
      }
    }
    this.barOptions = {
      xAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 10,
          color: '#999',
          fontSize: 10
        }
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 10.7,
          color: '#999',
          fontSize: 10
        }
      },
      series: {
        type: 'bar'
      }
    }
  }
  getInterval (series) {
    let max = 0
    let min = 0
    let interval = 5
    let data = []
    if (tool.getType(series) === 'array') {
      series.forEach((val, i) => {
        if (val.data) {
          data = val.data
          data.forEach((item, j) => {
            if (i === 0 && j === 0) {
              max = item
              min = item
            } else {
              max = max > item ? max : item
              min = min < item ? min : item
            }
          })
        }
      })
    } else if (tool.getType(series) === 'object') {
      if (series.data) {
        data = series.data
        data.forEach((item, j) => {
          if (j === 0) {
            max = item
            min = item
          } else {
            max = max > item ? max : item
            min = min < item ? min : item
          }
        })
      }
    }
    max = max !== 0 ? Math.floor(max + (max - min) / 5) : 3
    min = min !== 0 ? Math.floor(min - (max - min) / 5) : -1
    interval = Math.floor((max - min) / 4)
    return {max, min, interval}
  }
  drawLine (drawId, xData, series, config) {
    let myChart = this.echarts.init(document.getElementById(drawId))
    const {max, min, interval} = this.getInterval(series)
    const dataConfig = {
      xAxis: {
        data: xData
      },
      yAxis: {
        max,
        min,
        interval
      },
      series
    }
    const baseOptions = tool.getDeepObject(this.lineOptions)
    let options = tool.mergeData(baseOptions, dataConfig)
    if (config) {
      options = tool.mergeData(options, config)
    }
    myChart.setOption(options)
  }
  drawPie (drawId, xData, data, config) {
    let myChart = this.echarts.init(document.getElementById(drawId))
    const dataConfig = {
      legend: {
        data: xData
      },
      series: {
        data
      }
    }
    const baseOptions = tool.getDeepObject(this.pieOptions)
    let options = tool.mergeData(baseOptions, dataConfig)
    if (config) {
      options = tool.mergeData(options, config)
    }
    myChart.setOption(options)
  }
  drawBar (drawId, xData, data, config) {
    let myChart = this.echarts.init(document.getElementById(drawId))
    const dataConfig = {
      xAxis: {
        data: xData
      },
      series: {
        data
      }
    }
    const baseOptions = tool.getDeepObject(this.barOptions)
    let options = tool.mergeData(baseOptions, dataConfig)
    if (config) {
      options = tool.mergeData(options, config)
    }
    myChart.setOption(options)
  }
}
export default new Chart()
