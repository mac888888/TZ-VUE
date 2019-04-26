<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
export default{
  data () {
    return {msg: '通知'}
  },
  created () {
    this.tabPage = 'notice'
  }
}
</script>
<style>
</style>
