<template>
  <!-- <div class="wrap"
       :class="{whiteBg:changeBg}">
    <el-container class="nav">
      <el-row :gutter="60">
        <el-col>
          <img src="../../static/img/logo.png"
               alt=""
               width="100%"
               v-show="!changeBg">
          <img src="../../static/img/logo-dark.png"
               alt=""
               width="100%"
               v-show="changeBg">
        </el-col>
        <el-col class="tabs">
          <ul class="ul">
            <li v-for="(v,i) in navArr"
                :key="i"
                @click="routerHandle(i)"
                :class="[{black:changeBg},i==selected ? 'active' : '']">{{v}}</li>
          </ul>
        </el-col>
      </el-row>
    </el-container>
  </div> -->
  <div class="wrap"
       :class="{whiteBg:changeBg}">
    <div class="nav">
      <div class="logo">
        <img src="../../static/img/logo.png"
             alt=""
             width="100%"
             v-show="!changeBg">
        <img src="../../static/img/logo-dark.png"
             alt=""
             width="100%"
             v-show="changeBg">
      </div>
      <div class="tabs">
        <ul class="ul">
          <li v-for="(v,i) in navArr"
              :key="i"
              @click="routerHandle(i)"
              :class="[{black:changeBg},i==selected ? 'active' : '']">{{v}}</li>
        </ul>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: 'navbar',
  props: {
    changeBg: Boolean
  },
  data () {
    return {
      navArr: ['首页', '人才大数据', '解决方案', '人才服务', '关于我们'],
      psths: ['/home/index', '/bigdata/index', '/solution/index', '/service/index', '/aboutus/index'],

      selected: 0
    }
  },
  methods: {
    selectStyle () {
      var n = this.$route.path;
      this.psths.map((v, i) => {
        if (n === v) {
          this.selected = i
        }
      })
    },
    routerHandle (index) {
      this.selected = index;
      this.$router.push({ path: this.psths[index] })
    }
  },
  mounted () {
    this.selectStyle()
  }
}
</script>
<style scoped>
.ul li.active {
  color: #2f5ff4 !important;
}
.black {
  color: #333 !important;
}
.wrap {
  height: 80px;
}
.whiteBg {
  background-color: #fff;
  box-shadow: 0px 4px 20px 0px rgba(199, 202, 210, 0.5) !important;
  transition: background 1s;
}
.transparent {
  background-color: transparent;
}
.nav {
  line-height: 80px;
  width: 1170px;
  margin: 0 auto;
}
.nav img {
  transition: opacity 1s;
}
.tabs {
  margin-left: 120px;
  float: left;
}
.ul li {
  float: left;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  margin: 0 30px;
}
.logo {
  float: left;
}
</style>
