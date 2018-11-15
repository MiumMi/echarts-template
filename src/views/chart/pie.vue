<template>
  <div class="rule page">
    <div id="pie"></div>
  </div>
</template>

<script>
export default {
  name: 'pie',
  data () {
    return {
    }
  },
  mounted () {
    const xData = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    const data = [
      {value: 335, name: '直接访问'},
      {value: 310, name: '邮件营销'},
      {value: 234, name: '联盟广告'},
      {value: 135, name: '视频广告'},
      {value: 1548, name: '搜索引擎'}
    ]
    this.$chart.drawPie('pie', xData, data)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/assets/sass/_calculate.scss';
  #pie{
    width: 100%;
    height: calculate(600);
  }
</style>
