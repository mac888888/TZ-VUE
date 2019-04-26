<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
export default{
  data () {
    return {msg: '消息'}
  },
  created () {
    this.tabPage = 'message'
  }
}
</script>
<style>
</style>
