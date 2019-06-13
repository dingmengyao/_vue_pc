<template>
  <div class="wraper">
    <navbars class="navbars"
             :changeBg=changeBg
             :num=num></navbars>
    <div class="banner-img">
      <img src="../../../static/img/banner.png"
           alt=""
           style="width:100%;" />
    </div>
    <div class="index-content-center">
      <div class="index-content-product">
        <div class="content-product-infor">
          <dl class="fl">
            <dt>
              <img class="marImg_auto border_dashed"
                   src="../../../static/img/talents_icon1.png" />
            </dt>
            <dd class="">
              <h3 class="">1260万</h3>
              <p class="">高端人才库</p>
            </dd>
          </dl>
          <dl class="fl">
            <dt>
              <img class="marImg_auto border_dashed"
                   src="../../../static/img/talents_icon2.png" />
            </dt>
            <dd class="">
              <h3 class="">22.6万</h3>
              <p class="">人才政策库</p>
            </dd>
          </dl>
          <dl class="fl">
            <dt>
              <img class="marImg_auto border_dashed"
                   src="../../../static/img/talents_icon3.png" />
            </dt>
            <dd class="">
              <h3 class="">162万</h3>
              <p class="">产业信息库</p>
            </dd>
          </dl>
          <dl class="fl">
            <dt>
              <img class="marImg_auto border_dashed"
                   src="../../../static/img/talents_icon4.png" />
            </dt>
            <dd class="">
              <h3 class="">87.5万</h3>
              <p class="">科技成果库</p>
            </dd>
          </dl>
          <dl class="fl">
            <dt>
              <img class="marImg_auto border_dashed"
                   src="../../../static/img/talents_icon5.png" />
            </dt>
            <dd class="">
              <h3 class="">106万</h3>
              <p class="">需求库</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 高端人才库结束 -->
    <!-- search-input -->
    <div class="search-input">
      <div class="input-inner">
        <p>
          <input type="text"
                 class="fl"
                 v-model="inputVal" />
          <input type="button"
                 class="search"
                 @click="searchHandle">
          <img class="search1"
               src="../../../static/img/search1.png"
               @click="searchHandle" />
          <select class="select"
                  v-model="selectVal">
            <option :value="item"
                    v-for="(item,index) in seleArr"
                    :key="index">{{item}}</option>
          </select>

          <!-- <img class="sanjiao" src="../../../static/img/sanjiao.png" alt="" /> -->
        </p>
      </div>
    </div>
    <!-- 主要领域专家 -->
    <div class="specialist-bg">
      <div class="specialist">
        <div class="specialist-title">主要领域专家</div>
        <div class="specialist-nav">
          <ul>
            <li :class="active == i ? 'active' : ''"
                v-for="(v,i) in specialist"
                :key="i"
                @click="specialistHandle(v.key,i)">{{v.text}}</li>
          </ul>
        </div>
        <div class="container tanlent-box">
          <!-- <transition-group> -->
          <div class="specialist-box fl"
               v-for="(v,i) in specialistData"
               :key="i"
               @click="toresumeDetail(v.id)">
            <dl>
              <dt class="fl">
                <div class="user_img">{{v.realName.substr(0,1)}}</div>
              </dt>
              <dd>
                <p>{{v.realName}}</p>
                <p>{{v.psnlOrg}}</p>
              </dd>
            </dl>
            <div class="antistop">
              <p>关键词</p>
              <div class="specialist-word">

                <span v-for="(o,j) in v.psnlLableFmt.slice(0,7)"
                      :key="j">{{o}}</span>
                <span>...</span>
              </div>
            </div>
          </div>
          <!-- </transition-group> -->

        </div>

      </div>

      <!-- end -->
      <div class="newpolicy-bg">
        <div class="newpolicy">
          <div class="newpolicy-title">最新政策</div>
          <div class="t"
               v-for="(item,index) in policys"
               :key="index"
               @click="topolicyDetail(item.id)">
            <h5>{{item.title}}</h5>
            <p>{{item.introduction}}</p>
            <span>{{item.govtName}}</span>
          </div>
        </div>
      </div>
      <div class="zxf_pagediv"></div>
      <myfooter></myfooter>
    </div>
  </div>
</template>
<script>
import navbars from '@/components/navbars'
import myfooter from '@/components/myfooter'
export default {
  name: 'tanlentAndData',
  components: {
    myfooter,
    navbars
  },
  data () {
    return {
      changeBg: null,
      num: 1,
      inputVal: '',
      seleArr: ['找人才', '找政策'],
      selectVal: '找人才',
      //   specialist: ['电子信息', '机械制造', '生物医疗', '节能环保', '材料科学', '化学化工', '新能源'],
      specialist: [
        { key: '通信与信息系统', text: '电子信息' },
        { key: '机械制造及其自动化', text: '机械制造' },
        { key: '生物科学与工程', text: '生物医疗' },
        { key: '环境工程', text: '节能环保' },
        { key: '材料学', text: '材料科学' },
        { key: '分析化学', text: '化学化工' },
        { key: '电力系统及其自动化', text: '新能源' },
      ],
      active: 0,
      specialistData: [],
      policys: []
    }
  },
  methods: {
    topolicyDetail (id) {
      this.$router.push({ path: '/bigdata/policydetail', query: { id } })
    },
    toresumeDetail (id) {
      this.$router.push({ path: '/bigdata/resumedetails', query: { id } })
    },
    searchHandle () {  //搜索
      //   console.log(this.selectVal)
      if (this.inputVal == '') {
        return
      }
      if (this.selectVal == '找政策') {
        this.$router.push({ path: '/bigdata/talentspolicy', query: { inputV: this.inputVal, searchtype: 1 } })
      } else if (this.selectVal == '找人才') {
        this.$router.push({ path: '/bigdata/talentspolicy_talentsList', query: { inputV: this.inputVal, searchtype: 0 } })
      }
    },
    getPolicys (pageNum) {
      this.$http.post('http://www.forwork.cn/policy/p/searchMainPolicys', { pageNum }).then(response => {
        // console.log(response.data.content.listx)
        if (response.status == 200) {
          this.policys = response.data.content.listx
        }
      })
    },
    specialistHandle (industryDomain, index) {  //主要领域专家
      this.active = index;
      //   console.log(industryDomain)
      this.$http.get('http://www.forwork.cn/psnl/psnl/searchMainPsnl?industryDomain=' + industryDomain).then(response => {
        // console.log(response.data.content.data)
        if (response.status == 200) {

          this.specialistData = response.data.content.data.slice(0, 8);
        }
      });
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //   console.log(scrollTop)
      if (scrollTop > 320) {
        this.changeBg = true;
      } else {
        this.changeBg = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    this.changeBg = false;
    this.specialistHandle('通信与信息系统', 0)
    this.getPolicys(1)
    let that = this;
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key === 13) {
        that.searchHandle();//方法
      }
    }
  }
}
</script>
<style scoped>
.on-enter-active {
  transition: 2s ease;
}
.on-leave-active {
  transition: 3s ease;
}
.on-enter,
.on-leave-to {
  opacity: 0;
}
.select {
  background: url("../../../static/img/sanjiao.png") no-repeat scroll right 54%
    transparent;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 23px;
}
.wraper {
  background: rgba(241, 242, 248, 1);
  position: relative;
}
.navbars {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000000;
}
.index-content-center {
  position: absolute;
  top: 120px;
  left: 50%;
  margin-left: -600px;
}

.index-content-product {
  width: 1200px;
  margin: 0 auto;
}
.content-product-infor {
  display: flex;
  justify-content: center;
}
.content-product-infor dl {
  width: 19%;
  height: 208px;
  text-align: center;
  background: url("../../../static/img/talent-bg.png") no-repeat center left;
  border-right: 1px solid #737171;
  padding-top: 26px;
  padding-bottom: 26px;
}

.content-product-infor dl:last-child {
  border: none;
}

.content-product-infor dt {
  margin-bottom: 30px;
}

.content-product-infor dl dd h3 {
  font-size: 46px;
  font-family: "BebasNeueRegular";
  color: rgba(255, 255, 255, 1);
}

.content-product-infor dl dd p {
  font-size: 18px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(194, 197, 214, 1);
  margin-top: 7px;
}

/* 搜索 */
.search-input {
  position: absolute;
  top: 400px;
  left: 50%;
  margin-left: -450px;
}

.input-inner {
  position: relative;
  overflow: hidden;
}

.input-inner p input {
  height: 50px;
  font-size: 15px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
}

.input-inner p input[type="text"] {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 900px;
  border-radius: 5px;
  padding-left: 10px;
}

.input-inner p input[type="button"] {
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: rgba(47, 95, 244, 1);
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.search1 {
  position: absolute;
  top: 24%;
  right: 1.2%;
  cursor: pointer;
}

.sanjiao {
  position: absolute;
  top: 45%;
  right: 9%;
}

.select {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 30%;
  right: 10%;
  outline: none;
  cursor: pointer;
}

.select1 {
  height: 20px;
  overflow: hidden;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 14%;
  right: 10%;
  outline: none;
  cursor: pointer;
}

/* 主要专家领域 */

.specialist {
  width: 1200px;
  margin: 0px auto;
  padding-top: 60px;
  padding-bottom: 40px;
  overflow: hidden;
}

.specialist-title {
  font-size: 26px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(98, 100, 116, 1);
  text-align: center;
}

.specialist-nav {
  overflow: hidden;
}

.specialist-nav ul {
  width: 661px;
  margin: 0 auto;
  padding-top: 28px;
  overflow: hidden;
}

.specialist-nav ul li {
  float: left;
  margin: 0 20px;
  cursor: pointer;
  color: rgba(93, 96, 99, 1);
  font-size: 14px;
}

.specialist-nav ul li.active {
  border-bottom: 2px solid #2f5ff4;
  color: #2f5ff4;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
}
/* 专家 */
.user_img {
  width: 60px;
  height: 60px;
  background-color: #eff0f4;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  color: #a5a7b4;
  font-size: 18px;
}
.specialist-box {
  width: 260px;
  margin: 20px 12px;
  cursor: pointer;
}

.specialist-box dl {
  /* height: 60px; */
  text-align: center;
  background: url("../../../static/img/Oval-bg.png") no-repeat left center;
  padding: 20px;
  padding-bottom: 34px;
  margin-bottom: 0;
}
.specialist-box dl dt {
  margin-right: 20px;
  /* margin-top: 5px; */
}
.specialist-box dl dd p:first-child {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: #fff;
}
.specialist-box dl dd p:last-child {
  font-size: 12px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: #fff;
}
.antistop {
  height: 176px;
  padding: 10px 10px 30px 10px;
  background: #fff;
}
.antistop p {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(97, 101, 109, 1);
  padding-left: 10px;
  margin-bottom: 10px;
}
.specialist-word span {
  width: 70px;
  overflow: hidden;
  text-align: center;
  height: 24px;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.specialist-word span {
  font-size: 12px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(156, 159, 179, 1);
  display: inline-block;
  padding: 3px 11px;
  background: rgba(240, 241, 245, 1);
  border-radius: 12px;
  margin-right: 7px;
  margin-bottom: 15px;
}
/* 最新政策 */
.newpolicy-bg {
}

.newpolicy {
  width: 1162px;
  background: #fff;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 50px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.newpolicy-title {
  font-size: 26px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(98, 100, 116, 1);
  text-align: center;
}

.t {
  border-bottom: 1px solid rgba(219, 219, 233, 1);
  padding-bottom: 10px;
  margin-top: 20px;
  cursor: pointer;
}

.t h5 {
  font-size: 18px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(71, 72, 86, 1);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

.t p {
  font-size: 12px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(170, 173, 187, 1);
  line-height: 21px;
  margin-bottom: 6px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.t span {
  font-size: 10px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(165, 167, 180, 1);
  border-radius: 11px;
  background: #e9e9e9;
  /* border: 1px solid rgba(215, 220, 229, 1); */
  padding: 2px 12px;
}
</style>


