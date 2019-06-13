<template>
  <div>
    <navbar class="navbar"></navbar>
    <div class="search">
      <div class="search-inner">
        <div class="inp-txt">
          <input class="input-text"
                 type="text"
                 placeholder="请输入姓名、领域、文章或者专利查询需要的人才"
                 autofocus
                 v-model="inpV">
        </div>
        <div class="inp-btns"
             style="position:relative">
          <input type="button"
                 class="btn"
                 @click="searchHandle">
          <img src="../../../static/img/search1.png"
               alt=""
               class="seach-img"
               @click="searchHandle">
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-inner"
           v-if="tanlents.length!=0">
        <div class="inner-left fl">
          <ul class="uls"
              v-for="(item,index) in tanlents"
              :key="index"
              @click="toTanlentDetail(item.id)">
            <li class="clear">
              <dl class="fl">
                <!-- <dt class="img_name"
                    v-if="item.realName">{{item.realName.substr(0,1)}}</dt> -->
                <dd style="min-width: 62px;">{{item.realName}}</dd>
              </dl>
              <ul class="fl">
                <li>
                  <dd>{{item.industryDomain}}</dd>
                </li>
                <li>
                  <dd style="width:310px">
                    <span v-for="(v,i) in item.psnlLableFmt"
                          :key="i">{{v}}、</span>
                  </dd>
                </li>
              </ul>
              <p class="fl"><a style="color: rgba(111, 112, 118, 1);">查看匹配度报告</a></p>
            </li>
          </ul>
        </div>
        <div class="inner-right fr">
          <div class="ri-tifle">
            <h2 class="">相关人才政策</h2>
            <p class=""
               style="line-height:17px">
              <img src="../../../static/img/change.png"
                   style="margin-right:10px"
                   alt="">换一批</p>

          </div>
          <ul>
            <li style="color: rgba(111, 112, 118, 1);"
                v-for="(v,i) in policies_list"
                :key="i"
                @click="toPolicy(v.id)">{{v.tifle}}</li>
          </ul>
          <div class="checkmore"><a style="color: rgba(111, 112, 118, 1);display:inline-block;margin-top:10px;">查看更多</a></div>
        </div>
      </div>
      <div v-else
           style="text-align: center;font-size:20px;margin: 10px 0;min-height: 200px;line-height: 200px;">
        暂无数据
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import navbar from '@/components/navbar'
import myfooter from '@/components/myfooter'
export default {
  components: {
    navbar,
    myfooter
  },
  name: 'talentsPolicy_talentsList',
  data () {
    return {
      inpV: '',
      tanlents: [],
      policys: [],
      policies_list: []
    }
  },
  mounted () {
    this.renderInputV()
    this.getTanlenflist()
    let that = this;
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key === 13) {
        that.searchHandle();//方法
      }
    }

  },
  methods: {
    renderInputV () {
      this.inpV = this.$route.query.inputV
    },
    toPolicy (id) {
      //   console.log(id)
      this.$router.push({ path: '/bigdata/policydetail', query: { id: id } })
    },
    toTanlentDetail (id) {
      //   console.log(id)
      this.$router.push({ path: '/bigdata/resumedetails', query: { id: id } })
    },
    getTanlenflist () {
      // console.log(this.$route.query.inputV,'---------'+this.$route.query.searchtype);
      this.$http.get(`http://www.forwork.cn/psnl/psnl/searchPsnlAndPolicy?searchStr=${this.$route.query.inputV}&searchType=${this.$route.query.searchtype}`).then(res => {
        if (res.status == 200) {
          var tal = res.data.content.personnels.slice(0, 6);
          // console.log(res.data.content)
          for (var i = 0; i < tal.length; i++) {
            var item = tal[i];
            // console.log(item.psnlLableFmt)
            if (item.psnlLableFmt != '' && item.psnlLableFmt != null) {
              item.psnlLableFmt = item.psnlLableFmt.slice(0, 3)
              // console.log(item.psnlLableFmt)
            }

          }
          this.tanlents = tal;

          this.policys = res.data.content.policies || [];

          var policies_list = res.data.content.policies;
          // console.log(policies_list)
          if (policies_list.length > 8) {
            policies_list = policies_list.slice(0, 8)
          }
          // for (var k = 0; k < policies_list.length; k++) {
          //   var items = policies_list[k]
          //   var startIndex = items.tifle.indexOf('《')
          //   var endIndex = items.tifle.indexOf('》') + 1
          //   items.tifle = items.tifle.slice(startIndex, endIndex)
          // }
          //   console.log(policies_list)

          this.policies_list = policies_list;
          // console.log(this.policies_list)
        }
      })

    },
    searchHandle () {
      if (this.inpV == '') {
        return;
      } else {
        //   console.log(this.inpV)
        this.$http.get('http://www.forwork.cn/psnl/psnl/searchPsnlContainPolicy?searchStr=' + this.inpV).then(res => {
          // console.log(res.data.content.personnels.slice(0, 6))
          // this.tanlents = res.data.content.personnels.slice(0, 6) || [];
          if (res.status == 200) {
            var tal = res.data.content.personnels.slice(0, 6);
            // console.log(tal)
            for (var i = 0; i < tal.length; i++) {
              var item = tal[i];
              // console.log(item.psnlLableFmt)
              if (item.psnlLableFmt != '' && item.psnlLableFmt != null) {
                item.psnlLableFmt = item.psnlLableFmt.slice(0, 3)
                // console.log(item.psnlLableFmt)
              }

            }
            this.tanlents = tal;

            this.policys = res.data.content.policies || [];
            // console.log(res.data.content.policies)

            var policies_list = res.data.content.policies;
            if (policies_list.length > 8) {
              policies_list = policies_list.slice(0, 8)
            }
            // for (var k = 0; k < policies_list.length; k++) {
            //   var items = policies_list[k]
            //   var startIndex = items.tifle.indexOf('《')
            //   var endIndex = items.tifle.indexOf('》') + 1
            //   items.tifle = items.tifle.slice(startIndex, endIndex)
            // }
            //   console.log(policies_list)

            this.policies_list = policies_list;
          }
        })
      }

    }
  }

}
    // min-width: 62px;
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.search {
  padding: 60px 0;
  margin-top: 80px;
}

.search-inner {
  width: 912px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
}
.inp-txt {
  float: left;
}
.inp-txt input[type="text"] {
  width: 849px;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border: 1px solid rgba(47, 95, 244, 1);
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 10px;
}
.seach-img {
  position: absolute;
  top: 12px;
  left: 12px;
  cursor: pointer;
}
.inp-btns {
  float: left;
}
.inp-btns input {
  width: 50px;
  height: 52px;
  background: rgba(47, 95, 244, 1);
  border-radius: 0px 5px 5px 0px;
}

.search p select {
  position: absolute;
  top: 11%;
  right: 15%;
  border: none;
  border-left: 1px solid rgba(231, 234, 240, 1);
  oufline: none;
}

.search p select option {
  border: 1px solid rgba(231, 234, 240, 1);
}

.icon-span {
  display: inline-block;
  background-color: #fff;
  border: 1px solid rgba(231, 234, 240, 1);
  position: relative;
  width: 15px;
  height: 15px;
  vertical-align: middle;
}

.icon-span::after {
  border: 2px solid transparent;
  border-left: 0;
  border-top: 0;
  content: " ";
  top: 0px;
  left: 4px;
  position: absolute;
  width: 5px;
  height: 9px;
  -webkit-transform: rotate(45deg) scale(0);
  transform: rotate(45deg) scale(0);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}

.icon-span-select {
  background-color: green;
  border-color: #fff;
}

.icon-span-select::after {
  border-color: #fff;
  -webkit-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}
/* //////////////////////////////////////////////////////// */
.main {
  background: rgba(244, 245, 246, 1);
  /* height: 500px; */
  overflow: hidden;
  padding-bottom: 60px;
}

.main-inner {
  width: 1130px;
  margin: 0 auto;
  background-color: #fff;
  /* padding: 20px; */
  margin-top: 20px;
  padding: 20px 50px;
  overflow: hidden;
}

.inner-left {
  width: 718px;
}

.inner-left h2 {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
}

.inner-left h2 span {
  color: rgba(47, 95, 244, 1);
}

.uls {
  overflow: hidden;
  border-bottom: 1px solid rgba(231, 234, 240, 1);
  padding: 25px 0;
  cursor: pointer;
}

.inner-left ul li {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(111, 112, 118, 1);
  overflow: hidden;
}

.inner-left ul li dl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;
}

.inner-left ul li dl dt {
  margin-right: 30px;
}

.inner-left ul li dl dd {
  font-size: 20px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(44, 49, 53, 1);
}

.inner-left ul li ul {
}

.inner-left ul li p {
  margin: 10px 0 0 70px;
  font-size: 14px;
  font-family: "s";
  font-weight: 400;
  color: rgba(111, 112, 118, 1);
}

/* right */
.ri-tifle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 238px;
}

.ri-tifle h2 {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
  margin: 0;
}

.ri-tifle p {
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
  width: 248px;
}
.inner-right ul {
  margin-top: 15px;
}

.inner-right ul li {
  /* margin: 15px 0; */
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(44, 49, 53, 1);
  width: 248px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 24px;
}

.checkmore {
  text-align: right;
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(111, 112, 118, 1);
  cursor: pointer;
}

/* sanjiao */
.icon-span1 {
  display: inline-block;
  background-color: #fff;
  border: 1px solid rgba(231, 234, 240, 1);
  position: relative;
  width: 15px;
  height: 15px;
  vertical-align: middle;
}

.icon-span1::after {
  border: 2px solid red;
  border-left: 0;
  border-top: 0;
  content: " ";
  top: 6px;
  left: 9px;
  position: absolute;
  width: 11px;
  height: 11px;
  -webkit-transform: rotate(135deg) scale(0);
  transform: rotate(135deg) scale(0);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}

.icon-span-select1 {
  /* background-color: green; */
  width: 26px;
  height: 26px;
  border-radius: 4px;
  border: 1px solid rgba(231, 234, 240, 1);
  cursor: pointer;
}

.icon-span-select1::after {
  border-color: rgba(231, 234, 240, 1);
  -webkit-transform: rotate(135deg) scale(1);
  transform: rotate(135deg) scale(1);
}

.pages-btn {
  height: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pages-btn ol li {
  float: left;
  width: 26px;
  height: 26px;
  cursor: pointer;
  text-align: center;
  line-height: 26px;
}

.icon-span2 {
  display: inline-block;
  background-color: #fff;
  border: 1px solid rgba(231, 234, 240, 1);
  position: relative;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  cursor: pointer;
}

.icon-span2::after {
  border: 2px solid red;
  border-left: 0;
  border-top: 0;
  content: " ";
  top: 6px;
  left: 5px;
  position: absolute;
  width: 11px;
  height: 11px;
  -webkit-transform: rotate(323deg) scale(0);
  transform: rotate(360deg) scale(0);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}

.icon-span-select2 {
  /* background-color: green; */
  width: 26px;
  height: 26px;
  border-radius: 4px;
  border: 1px solid rgba(231, 234, 240, 1);
  cursor: pointer;
}

.icon-span-select2::after {
  border-color: rgba(231, 234, 240, 1);
  -webkit-transform: rotate(-45deg) scale(1);
  transform: rotate(-45deg) scale(1);
  cursor: pointer;
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
