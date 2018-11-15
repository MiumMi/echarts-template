<template>
  <div class="rule page">
    <div id="bar"></div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
    }
  },
  mounted () {
    const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const data = [120, 200, 150, 80, 70, 110, 130]
    this.$chart.drawBar('bar', xData, data)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/assets/sass/_calculate.scss';
  #bar{
    width: 100%;
    height: calculate(600);
  }
</style>
