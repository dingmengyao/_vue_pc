<template>
  <div style="background: rgba(244, 245, 246, 1);">
    <navbar class="navbar"></navbar>
    <div class="main">
      <div class="main-inner">
        <div class="inner-left fl">
          <div class="title">{{policy.title}}</div>
          <div class="copys">
            <p>{{policy.govtName}}</p>
            <p v-if="policy.publicTime">{{policy.publicTime.substr(0,10)}}</p>
          </div>
          <div class="policy-content"
               v-html="policy.content"></div>
        </div>
        <div class="inner-right fr">
          <div class="ri-title">
            <h2 class="">相关人才政策</h2>
            <!-- <p class="" style="line-height:17px"><img src="images/change.png" style="margin-right:10px" alt="">换一批</p> -->
          </div>
          <div class="ta-list"
               v-for="(item,index) in personnelList"
               :key="index">
            <div class="img_name fl"
                 v-if="item.realName">{{item.realName.substr(0,1)}}</div>
            <p class="fr">
              <span>{{item.realName}}</span>
              <span>匹配度</span>
              <span>{{item.levelScore}}</span>
              <span>%</span>
            </p>
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
  name: 'policyDetail',
  components: {
    navbar,
    myfooter
  },
  data () {
    return {
      personnelList: [],
      policy: {}
    }

  },
  created () {
    // console.log(this.$route.query)
    this.$http.get('http://www.forwork.cn/policy/p/policyInfo?id=' + this.$route.query.id).then(res => {
      //   console.log(res)
      if (res.status == 200) {
        // console.log(res.data.content.personnelList[0])
        this.personnelList = res.data.content.personnelList.slice(0, 3);
        this.policy = res.data.content.policy;
      }
    })
    // this.$http.get('/policy/p/policyInfo?id=' + id).then(res => {
    //   if (res.status == 200) {
    //     // console.log(res.data.content.personnelList[0])
    //     this.personnelList = res.data.content.personnelList.slice(0, 3);
    //     this.policy = res.data.content.policy;
    //   }
    // })
  }
}
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
}
.main {
  margin-top: 80px;
  background: rgba(244, 245, 246, 1);
	margin-bottom: 30px;
	    padding-top: 10px;
}

.main-inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 50px;
  overflow: hidden;
  margin-top: 20px;
}

.inner-left {
  width: 682px;
}

.inner-left .title {
  font-size: 26px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
  line-height: 38px;
}

.copys {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(165, 167, 180, 1);
  padding: 10px 0;
}
.policy-content {
  padding-bottom: 60px;
}
.policy-content p {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(93, 96, 99, 1);
  margin-top: 30px;
  text-indent: 2em;
}

.inner-right {
  width: 330px;
}

.ta-list {
  padding: 20px;
  margin-bottom: 30px;
}

.ta-list p {
  height: 50px;
  color: #f17d3c;
  display: flex;
  align-items: center;
}

.ta-list p span:first-child {
  font-size: 20px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(44, 49, 53, 1);
}

.ta-list p span:nth-child(2) {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(93, 96, 99, 1);
  margin-right: 21px;
  margin-left: 30px;
}

.ta-list p span:nth-child(3) {
  font-size: 34px;
  font-family: "DINCondensed-Bold";
  font-weight: bold;
  color: rgba(241, 125, 60, 1);
  line-height: 36px;
}

.ta-list p span:nth-child(4) {
  display: inline-block;
  margin-top: 14px;
}

.ri-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ri-title h2 {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
  margin: 0;
}

.ri-title p {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(111, 112, 118, 1);
  line-height: 10px;
  margin: 6px 0 0 0;
  padding: 0;
  height: 18px;
}
.inner-right {
  width: 330px;
}

.ta-list {
  padding: 20px;
  margin-bottom: 30px;
}

.ta-list p {
  height: 50px;
  color: #f17d3c;
  display: flex;
  align-items: center;
}

.ta-list p span:first-child {
  font-size: 20px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(44, 49, 53, 1);
}

.ta-list p span:nth-child(2) {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(93, 96, 99, 1);
  margin-right: 21px;
  margin-left: 30px;
}

.ta-list p span:nth-child(3) {
  font-size: 34px;
  font-family: "DINCondensed-Bold";
  font-weight: bold;
  color: rgba(241, 125, 60, 1);
  line-height: 36px;
}

.ta-list p span:nth-child(4) {
  display: inline-block;
  margin-top: 14px;
}

.ri-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ri-title h2 {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
  margin: 0;
}

.ri-title p {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(111, 112, 118, 1);
  line-height: 10px;
  margin: 6px 0 0 0;
  padding: 0;
  height: 18px;
}
.img_name {
  width: 50px;
  height: 50px;
  background-color: #eff0f4;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  color: #a5a7b4;
  font-size: 18px;
}
</style>
