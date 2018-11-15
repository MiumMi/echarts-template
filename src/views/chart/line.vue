<template>
  <div class="rule page">
    <div id="line"></div>
  </div>
</template>

<script>
export default {
  name: 'line',
  data () {
    return {
    }
  },
  mounted () {
    const echarts = window.echarts
    // console.log(this.$chart.drawLine)
    const xData = ['2018-09-10', '2018-09-10', '2018-09-10']
    const series = [{
      name: '指数收益价',
      data: [70, 1110, 0.09],
      type: 'line',
      showSymbol: false,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#e43542'
        }, {
          offset: 1,
          color: '#fff'
        }])
      }
    }, {
      type: 'line',
      lineStyle: {
        color: '#35c9f1',
        width: 1
      },
      data: [100, 10, 800],
      showSymbol: false
    }]
    const config = {
      tooltip: {
        formatter: function (param) {
          var value = param[0]
          return '指数收益价：' + value.value
        }
      }
    }
    this.$chart.drawLine('line', xData, series, config)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/sass/_calculate.scss';
  #line{
    width: 100%;
    height: calculate(600);
  }
</style>
