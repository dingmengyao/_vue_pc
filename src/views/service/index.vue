<template>
  <div>
    <navbar class="navbar"></navbar>
    <div class="us-server1-bg">
      <div style="width:1170px;margin:0 auto;">
        <!-- 我们的服务 -->
        <div class="us-server1">
          <div class="us-server1-title tc">我们的服务</div>
          <div class="us-server1-list">
            <div class="list-box">
              <!-- <dl class="fl"> -->
              <router-link to="/service/talent_evaluating"
                           tag="dl"
                           class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_1.png"
                       alt=""
                       class="toTanlentEvaluate">
                </dt>
                <dd>
                  <h5 class="tc toTanlentEvaluate">人才评测服务</h5>
                </dd>
              </router-link>

              <!-- </dl> -->

              <!-- <dl class="fl"> -->
              <router-link to="/service/chengguo"
                           tag="dl"
                           class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_8.png"
                       alt=""
                       class="toAchievementEvalute">
                </dt>
                <dd>
                  <h5 class="tc toAchievementEvalute">成果评定服务</h5>
                </dd>
              </router-link>

              <!-- </dl> -->
              <dl class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_2.png"
                       alt="">
                </dt>
                <dd>
                  <h5 class="tc">人才推荐服务</h5>
                </dd>
              </dl>
              <dl class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_3.png"
                       alt="">
                </dt>
                <dd>
                  <h5 class="tc">人才考核服务</h5>
                </dd>
              </dl>
              <dl class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_4.png"
                       alt="">
                </dt>
                <dd>
                  <h5 class="tc">在线培训服务</h5>
                </dd>
              </dl>

              <dl class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_5.png"
                       alt="">
                </dt>
                <dd>
                  <h5 class="tc">专家面试服务</h5>
                </dd>
              </dl>
              <dl class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_6.png"
                       alt="">
                </dt>
                <dd>
                  <h5 class="tc">薪酬社保服务</h5>
                </dd>
              </dl>
              <dl class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_7.png"
                       alt="">
                </dt>
                <dd>
                  <h5 class="tc">项目监控</h5>
                </dd>
              </dl>

              <dl class="fl">
                <dt class="tc">
                  <img src="../../../static/img/talent_9.png"
                       alt="">
                </dt>
                <dd>
                  <h5 class="tc">科技成果推荐服务</h5>
                </dd>
              </dl>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="for-server-bg">
      <h4>服务对象</h4>
      <div class="for-server">
        <div class="for-server-inner">
          <div>

            <img src="../../../static/img/talent.png"
                 alt=""
                 style="width:100%">
          </div>
          <div>

            <img src="../../../static/img/government.png"
                 alt=""
                 style="width:100%">
          </div>
          <div>

            <img src="../../../static/img/company.png"
                 alt=""
                 style="width:100%">
          </div>
          <div>
            <img src="../../../static/img/school.png"
                 alt=""
                 style="width:100%">

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
  name: 'talents_server',
  components: {
    myfooter,
    navbar
  }
}
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.us-server1-bg {
  background: rgba(244, 245, 246, 1);
  padding-bottom: 60px;
  margin-top: 80px;
}

.us-server1 {
  padding-top: 50px;
}

.us-server1-title {
  font-size: 26px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: #2c3135;
}

.us-server1-list {
  overflow: hidden;
  /* margin-top: 60px; */
}

.list-box {
  overflow: hidden;
}

.list-box dl {
  margin: 0 3.16%;
  margin-top: 60px;
  width: 27%;
}
.list-box dl dt img {
  cursor: pointer;
}
.list-box dl dd h5 {
  font-size: 18px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: #5d6063;
  margin-top: 30px;
  cursor: pointer;
}

.list2 dl {
  width: 18%;
}

.mt80 {
  margin-top: 80px;
}

.us-server2-bg {
  color: #fff;
  padding-bottom: 80px;
}

.list2 dl dd p {
  width: 230px;
  font-size: 12px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(165, 167, 180, 1);
}
/* ------- */
.for-server-bg {
  padding-top: 60px;
  padding-bottom: 90px;
}
.for-server {
  width: 1170px;
  margin: 0 auto;
}
.for-server-inner {
  display: flex;
  padding: 0 70px;
}
.for-server-inner div {
  width: 25%;
  margin: 0 10px;
}
.for-server img {
  margin: 0 10px;
}
.for-server-bg h4 {
  font-size: 26px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(44, 49, 53, 1);
  margin-bottom: 60px;
  text-align: center;
}
.list-box dl {
  cursor: pointer;
}
.list-box dl dt img:hover {
  transition: all 0.3s linear;
  /* box-shadow: 0 15px 80px 10px rgba(0,0,0,.1); */
  /* transform: translate3d(0,-2px,0); */
  transform: scale(1.2, 1.2);
  cursor: pointer;
}
</style>
