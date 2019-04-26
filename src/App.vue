<template>
  <router-view v-if="routePath === '/login'"></router-view>
  <div id="app" v-else>
    <router-view/>
    <mt-tabbar v-model="tabPage" v-show="tabShow" fixed>
      <mt-tab-item id="work" @click.native="pageChange('/work')">
        <i class="icon-tz-home"></i><div>工作</div>
      </mt-tab-item>
      <mt-tab-item id="notice" @click.native="pageChange('/notice')">
        <i class="icon-tz-collection"></i><div>通知</div>
      </mt-tab-item>
      <mt-tab-item id="message" @click.native="pageChange('/message')">
        <i class="icon-tz-voice"></i><div>消息</div>
      </mt-tab-item>
      <mt-tab-item id="my" @click.native="pageChange('/my')">
        <i class="icon-tz-nickname"></i><div>我的</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      routePath: '/',
      tabPage: 'work'
    }
  },
  created () {
    console.log('app.vue created.............')
    this.routePath = this.$route.path
    this.tabShow = this.$route.meta.tabShow
  },
  mounted () {
    console.log('router:', this.$route)
  },
  methods: {
    pageChange (path) {
      console.log(path)
      this.$router.replace({path: path})
    }
  },
  watch: {
    '$route' (toRoute, fromRoute) {
      console.log('routeChange......', toRoute, fromRoute)
      this.routePath = this.$route.path
      this.tabShow = this.$route.meta.tabShow
    }
  }
}
</script>

<style lang="scss">
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.16rem;
    .mint-header-title{
      font-size: 16px;
      padding-top: 2px;
    }
    .mint-tab-item{
      padding: 4px 0;
    }
  }
  html, body{
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
