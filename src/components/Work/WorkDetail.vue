<template>
  <div class="work-detail">
    <mt-header fixed :title="title">
      <router-link to="" @click.native="headBack" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>{{msg}}</div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      msg: '工作详情',
      title: '标题过长隐藏'
    }
  },
  methods: {
    headBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
  .work-detail{
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 50px 10px 10px 10px;
  }
</style>
