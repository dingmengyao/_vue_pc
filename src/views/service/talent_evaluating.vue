<template>
  <div>
    <!-- <navbar></navbar> -->
    <div class="wrap container-fuild">
      <div class="container nav">
        <div class="pull-left logo">
          <img src="../../../static/img/logo-dark.png"
               alt=""
               width="100%">
          <!-- col-lg-3 col-md-3 col-xs-3 -->
        </div>
        <div class="pull-left tabs">
          <ul class="ul">
            <li :class="i==selected ? 'selected' : ''"
                v-for="(v,i) in navArr"
                :key="i"
                @click="routerHandle(i)">{{v}}</li>
          </ul>
        </div>

      </div>

    </div>
    <div class="container-fuild"
         style="margin-top:80px">
      <img src="../../../static/img/images/banner.png"
           alt=""
           style="width: 100%">
      <div class="container">
        <div class="row"
             style="display: flex;align-items: center;">
          <div class="tanlent-image">
            <img src="../../../static/img/images/tanlent_moudle.png"
                 alt="">
          </div>
          <div class="tanlent-model">
            <h4>全行业人才评测模型</h4>

            <ul>
              <li>领先的行业人才评测模型</li>
              <li>涵盖不同层级，灵活应用标签分类法建构评测模型，搭建有效的、灵活的、体系化的人才标准及体系</li>
              <li>适用于：各行业、产业、地方政府产业人才的评测</li>
            </ul>

          </div>
        </div>
      </div>

    </div>
    <div class="banner-bg">
      <div class="container">
        <div class="
           row"
             style="display: flex;align-items: center;">
          <div class="tanlent-model">
            <h4>人才知识考评</h4>
            <ul>
              <li>可定制知识、技能考评系统 生成符合企业需求的知识考评系统</li>
              <li>大数据智能数据引擎智能评阅和分析考评结果，自动判分并统计题目正确率</li>
              <li>适用于：各企业、事业单位、高校等单位进行人才知识考评</li>
            </ul>
          </div>
          <div class="tanlent-image">
            <img src=" ../../../static/img/images/knowledge.png"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="">

      <div class="container">
        <div class="row"
             style="display: flex;align-items: center;">
          <div class="tanlent-image">
            <img src="../../../static/img/images/evaluate.png"
                 alt="">
          </div>
          <div class="tanlent-model">
            <h4>人才评测--API接口</h4>
            <ul>
              <li>操作简单易用基于HTTP协议的标准API接口</li>
              <li>系统功能强大专有的接口管理后台，便于设置和管理测评数据多平台自适应基于HTML5技术，能自适应网站，APP,微信或其它平台</li>
              <li>适用于：各行业、产业、地方政府产业人才的评测</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-bg">
      <div class="footer">
        <div class=" foot">
          <h5>我们的合作伙伴</h5>
          <div class="partner"
               style="margin-top:30px;margin-left:0;margin-right:0">
            <div style="padding:30px 70px">
              <a href="https://www.renaren.com/"
                 target="_blank"><img src="../../../static/img/images/conpany1.png"
                     class="towap"
                     alt=""
                     style="width:100%"></a>

            </div>
            <div style="padding:30px 70px">
              <a href="https://www.beisen.com/"
                 target="_blank"><img src="../../../static/img/images/conpany2.png"
                     class="towap"
                     alt=""
                     style=" width:100%"></a>

            </div>
            <div style="padding:30px 70px">
              <a href="http://www.bjsdrc.com/"
                 target="_blank"><img src="../../../static/img/images/conpany3.png"
                     class="towap"
                     alt=""
                     style=" width:100%"></a>

            </div>
            <div style="padding:30px 70px">
              <a href="http://www.yingchuang.com/"
                 target="_blank"><img src="../../../static/img/images/conpany4.png"
                     class="towap"
                     alt=""
                     style=" width:100%"></a>

            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import navbar from '@/components/navbar'
import myfooter from '@/components/myfooter'
export default {
  name: 'achievement',
  components: {
    navbar,
    myfooter
  },
  data () {
    return {
      navArr: ['首页', '人才大数据', '解决方案', '人才服务', '关于我们'],
      psths: ['/home/index', '/bigdata/index', '/solution/index', '/service/index', '/aboutus/index'],
      selected: 3
    }
  },
  methods: {
    routerHandle (index) {
      this.selected = index;
      //   console.log(this.psths[index])
      this.$router.push({ path: this.psths[index] })
    }
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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
.logo {
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
.banner-bg {
  background-color: rgba(247, 248, 249, 1);
}

.tanlent-model {
  flex: 1;
  margin: 0 3%;
  padding: 3%;
}

.tanlent-image {
  flex: 1;
  margin: 0 3%;
  padding: 7%;
}

.tanlent-image img {
  width: 80%;
}

.tanlent-model h4 {
  font-size: 30px;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(61, 65, 70, 1);
  line-height: 70px;
}

.tanlent-model ul {
  padding-left: 16px;
}

.tanlent-model ul li {
  font-size: 14px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(61, 65, 70, 1);
  list-style: disc;
  margin: 8px 0;
}

.footer {
  padding: 60px 0;
}

.foot h5 {
  font-size: 26px;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(98, 100, 116, 1);
  text-align: center;
}

.towap {
  cursor: pointer;
}

.dot {
  width: 25px;
  height: 28px;
  position: absolute;
  top: 0px;
  left: -10px;
  color: #3d4146;
  font-size: 40px;
}
.partner {
  display: flex;
  justify-content: space-between;
}
.partner div {
  width: 25%;
}
</style>

