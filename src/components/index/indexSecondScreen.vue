<template>
  <div class="wrap">
    <!-- <navbars></navbars> -->
    <div class="inner">
      <div class="left">
        <img src="../../../static/img/earth.gif"
             alt="">
      </div>
      <div class="right">
        <h4 class="title">人才共享大数据平台</h4>
        <p class="subtitle">大数据可视化产品、人才大数据智能引擎、人才储备预警决策、产业发展分析决策等4大核心
          <div class="charts">
            <div class="chart-left">
              <img src="../../../static/img/databar.png"
                   alt="">
            </div>
            <div class="chart-right">
              <img src="../../../static/img/lifangti.png"
                   alt="">
            </div>
          </div>
          <div class="worldData">
            <h3>全球人才产业数据</h3>
            <p class="subt">人才大数据智能匹配引擎，实现人才与产业、人才与政策的精准匹配和对接</p>
            <div class="library-list">
              <div class="list-box list-bg posi fl"
                   style="">
                <img src="../../../static/img/lingjiangtai.png"
                     alt=""
                     class="ljt">
                <span style="">1260万</span>
                <p>高端人才库</p>
              </div>
              <div class="list-box posi fl">
                <img src="../../../static/img/lingjiangtai.png"
                     alt=""
                     class="ljt">
                <span style="">22.6万</span>
                <p>人才政策库</p>
              </div>
              <div class="list-box posi fl">
                <img src="../../../static/img/lingjiangtai.png"
                     alt=""
                     class="ljt">
                <span style="">162万</span>
                <p>产业信息库</p>
              </div>
              <div class="list-box posi fl">
                <img src="../../../static/img/lingjiangtai.png"
                     alt=""
                     class="ljt">
                <span style="">87.5万</span>
                <p>科技成果库</p>
              </div>
              <div class="list-box posi fl">
                <img src="../../../static/img/lingjiangtai.png"
                     alt=""
                     class="ljt">
                <span style="">106万</span>
                <p>需求库</p>
              </div>

            </div>
          </div>
      </div>
    </div>

  </div>
</template>
<script>
import navbars from '../navbars'
export default {
  name: 'indexSecondScreen',
  components: {
    navbars
  }
}
</script>
<style scoped>
.wrap {
  position: relative;
}
.navbars {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000000000;
}
.inner {
  display: flex;
  align-items: center;
  height: 100vh;
	margin-top: 30px;
}
.left {
  width: 50%;
}
.left img {
  width: 150%;
  height: 100%;
}
.right {
  width: 50%;
  margin-left: -3rem;
}
.title {
  font-size: 1.375rem;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-bottom: 6px;
}
.subtitle {
  font-size: 0.75rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(198, 200, 242, 1);
  text-align: left;
}
.charts {
  display: flex;
}
.chart-left img {
  width: 88%;
}
.chart-right img {
  width: 100%;
}
.worldData h3 {
  font-size: 1.375rem;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 6px;
  padding-left: 1.875rem;
  text-align: left;
}

.subt {
  font-size: 0.75rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(198, 200, 242, 1);
  padding-left: 1.875rem;
  text-align: left;
}
.fl {
  float: left;
}
.posi {
  position: relative;
}
.library-list {
  /* display: flex; */
}
.list-box {
  width: 20%;
}
.list-box span {
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.1rem;
  font-family: Digital-7Mono;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.list-box img {
  width: 100%;
}

.list-box p {
  text-align: center;
  margin-top: -0.6rem;
  font-size: 0.75rem;
}
</style>
