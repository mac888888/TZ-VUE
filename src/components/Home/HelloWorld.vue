<template>
  <div class="hello">
    <h1 @click="link">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App, HaHa'
    }
  },
  methods: {
    link () {
      this.$router.push({path: '/work'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .hello{
    h1, h2 {
      font-weight: normal;
    }
  }
</style>
