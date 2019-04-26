<template>
    <div @click="goDetail()">
        {{msg}}
    </div>
</template>
<script>
export default{
  data () {
    return {
      msg: '工作'
    }
  },
  created () {
    this.tabPage = 'work'
  },
  methods: {
    goDetail () {
      this.$router.push({path: '/workDetail'})
    }
  }
}
</script>
<style>
</style>
