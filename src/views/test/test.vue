<template>
  <div class="rule page">
    <router-link tag="li" to="/line">
      line
    </router-link>
    <router-link tag="li" to="/pie">
      pie
    </router-link>
    <router-link tag="li" to="/bar">
      bar
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'rule',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
