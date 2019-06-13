<template>
  <div class="wrap">
    <div class="nav">
      <div class="logo">
        <img src="../../static/img/logo-dark.png"
             alt=""
             width="100%">
        <!-- col-lg-3 col-md-3 col-xs-3 -->
      </div>
      <div class="tabs">
        <ul class="ul">
          <li :class="i==selected ? 'selected' : ''"
              v-for="(v,i) in navArr"
              :key="i"
              @click="routerHandle(i)">{{v}}</li>
        </ul>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: 'navbar',
  props: ['changeBg'],
  data () {
    return {
      navArr: ['首页', '人才大数据', '解决方案', '人才服务', '关于我们'],
      psths: ['/home/index', '/bigdata/index', '/solution/index', '/service/index', '/aboutus/index'],
      selected: 1
    }
  },
  watch: {
    'num': function (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    selectStyle () {
      //   console.log(this.$route.name)
      var n = this.$route.path;
      this.psths.map((v, i) => {
        if (n === v) {
          this.selected = i
        }
      })
    },
    routerHandle (index) {
      this.selected = index;
      //   console.log(this.psths[index])
      this.$router.push({ path: this.psths[index] })
    }
  },
  mounted () {
    this.selectStyle()
  }
}

</script>
<style scoped>
.ul li {
  float: left;
  color: #000;
}
.wrap {
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 4px 20px 0px rgba(199, 202, 210, 0.5) !important;
  transition: all 1s;
}
.nav {
  line-height: 80px;
  width: 1170px;
  margin: 0 auto;
}
.tabs {
  margin-left: 120px;
  float: left;
}
.ul li {
  cursor: pointer;
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(111, 113, 118, 1);
  margin: 0 30px;
}
.ul li.selected {
  color: #2f5ff4;
}
.logo {
  float: left;
}
</style>
