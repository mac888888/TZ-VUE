<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
export default{
  data () {
    return {msg: '我的'}
  },
  created () {
    this.tabPage = 'my'
  }
}
</script>
<style>

</style>
