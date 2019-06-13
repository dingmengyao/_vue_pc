<template>
  <div>
    <navbar class="navbar"
            :num="num"></navbar>
    <div class="main">
      <div class="container inner">
        <div class="talent">
          <div class="cicleName fl">
            <div v-if="personnel.realName">{{personnel.realName.substr(0,1)}}</div>
          </div>
          <div class="major fl">
            <p>
              <span>{{personnel.realName}}</span>
              <!-- <span id="phone">联系专家</span> -->
							<el-button type="text" class="phone" @click="open">联系专家</el-button>
            </p>
            <ul class="ul1">
              <li>所在机构</li>
              <li>{{personnel.psnlOrg}}</li>
              <li>成果数<span class="boldspan">{{personnel.achieNumber}}</span></li>
              <li>引用频次<span class="boldspan">{{personnel.quoteFrequency}}</span></li>
              <li>H因子<span class="boldspan">{{personnel.hfactor}}</span></li>
            </ul>
            <ul class="ul2">
              <li style="background-color:rgba(253,243,237,1);color:#F7A468">{{personnel.industryDomain}}</li>
            </ul>
          </div>
        </div>
        <div class="tabs">
          <ul class="tabs-tit">
            <li :class="index==selected ? 'tabs-active' : ''"
                v-for="(item,index) in tab"
                :key="index"
                @click="tabsHandle(index)">{{item}}</li>
          </ul>
          <div class="part">
            <div class="dv"
                 v-show="selected == 0">
              <div class="first-dv-left fl">
                <ul class="teams">
                  <li v-for="(item,index) in teampartList"
                      :key="index"><span class="num">{{index+1}}</span><span style="display:inline-block;min-width: 120px;">{{item.partName}}</span>{{item.partOrg}}</li>
                  <!-- <li><i>H因子：</i>{{$value.partHfactor}}</li> -->
                </ul>

              </div>
            </div>
            <div class="dv"
                 v-show="selected == 1">
              <div class="lunwens"
                   v-for="(item,index) in achievementList"
                   :key="index">
                <h5 class="h6-tit">{{item.achvName}}</h5>
                <ul>
                  <li>作者：<span>{{item.achvAuthor}}</span></li>
                  <li>引用次数：<span>{{item.achvQuote}}</span></li>
                  <li>刊期：<span>{{item.achvPeriodical}}</span></li>
                </ul>
              </div>
            </div>
            <div class="dv"
                 v-show="selected == 2">
              <div class="third-dv-left fl">
                <div class="xx"
                     v-for="(item ,index) in patentList"
                     :key="index">
                  <h6 class="h6-tit">{{item.patentName}}</h6>
                  <p style="color:#A5A7B4">公开号：<span style="color:#5D6063">{{item.patentNo}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;申请时间：<span style="color:#5D6063">{{item.patentTime}}</span></p>
                </div>
              </div>
              <!-- <iframe class="fr ifa" src="wordcloud.html" frameborder="0" scrolling=no width="550" height="450"></iframe> -->
            </div>
          </div>

        </div>
        <div class="policy">
          <h2 class="h2t">政策匹配</h2>
          <div class="list-bg">
            <div class="list-inner">
              <ul>
                <li v-for="(item,index) in policieList"
                    :key="index"
                    @click="topolicyDetail(item.id)">
                  <div class="list-box">
                    <h5>{{item.title}}</h5>
                    <p class="list-content">{{item.introduction}}</p>
                    <div class="list-copy">
                      <p class="fl">
                        <span>{{item.rangeScope}}</span>
                        <span>{{item.govtName}}</span>
                      </p>
                      <p class="fr">{{item.publicTime}}</p>
                    </div>
                  </div>
                </li>
              </ul>
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
  name: 'resumeDetails',
  components: {
    navbar,
    myfooter
  },
  data () {
    return {
      personnel: {},
      teampartList: [],
      achievementList: [],
      patentList: [],
      policieList: [],
      firstName: '',
      tab: ['合作团队', '论文期刊', '发明专利'],
      selected: 0,
      num: 1
    }
  },
  methods: {
		open() {
        this.$alert('<p style="text-align: center;font-size:14px;font-family:PingFangSC-Regular;font-weight:400;color:rgba(93,96,99,1);">高端人才服务热线</p><p style="text-align: center;;font-size:26px;font-family:PingFangSC-Semibold;font-weight:600;color:rgba(47,95,244,1);margin:20px 0;">400-680-8565</P>', {
          dangerouslyUseHTMLString: true,
					showClose:false,
					closeOnClickModal:true,
					closeOnPressEscape:true,
					center: true,
        });
      },
    topolicyDetail (id) {
      //   console.log(id)
      this.$router.push({ path: '/bigdata/policydetail', query: { id } })
    },
    tabsHandle (i) {
      this.selected = i;
    }
  },
  created () {
    // console.log(this.$route.query)
    this.$http.get('http://www.forwork.cn/psnl/psnl/psnlInfo?id=' + this.$route.query.id).then(res => {
      //   console.log(res.data.content.personnel)
      if (res.status == 200) {
        this.personnel = res.data.content.personnel || {};
        // this.firstName = this.personnel.

        this.teampartList = res.data.content.teampartList.slice(0, 6) || [];
        this.achievementList = res.data.content.achievementList.slice(0, 4) || [];
        this.patentList = res.data.content.patentList || [];
        this.policieList = res.data.content.policieList || [];

      }
    })
  }
}
</script>
<style scoped>
	.daliog-button{
		width: 90px;
		height: 26px;
		background: rgba(47, 95, 244, 1);
		border-radius: 13px;
		border: none;
		font-size: 14px;
		font-family: 'PingFangSC-Regular';
		font-weight: 400;
		color: rgba(255,255,255,1);
		outline: none;
	}
	    
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.main {
  background: rgba(244, 245, 246, 1);
  padding-top: 25px;
  padding-bottom: 60px;
}

.inner {
  background: rgba(255, 255, 255, 1);
  background-color: #fff;
  padding: 40px;
  margin-top: 86px;
}

.talent {
  overflow: hidden;
  position: relative;
}
.cicleName {
  margin-right: 30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: blue;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #fff;
}
.talent img {
  margin-right: 30px;
  width: 120px;
  height: 120px;
}

.major ul {
  overflow: hidden;
}

.major p {
  margin: 0px 0 10px 0;
}

.major p span {
  display: inline-block;
}

.major p span:first-child {
  font-size: 26px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
  margin-right: 39px;
}

.major p span:last-child {
  width: 129px;
  height: 34px;
  background: rgba(251, 171, 79, 1);
  border-radius: 20px;
  text-align: center;
  line-height: 34px;
  color: #fff;
  font-size: 16px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  cursor: pointer;
  position: absolute;
  right: 0;
}

.major ul:first-child {
  margin-bottom: 15px;
}

.major ul:first-child li {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(165, 167, 180, 1);
  margin-right: 40px;
}

.ul1 li {
  margin-right: 40px;
  line-height: 40px;
  display: inline-block;
  color: #a5a7b4;
}

.ul1 li:nth-child(2) {
  color: rgba(111, 112, 118, 1);
}

.boldspan {
  font-size: 28px;
  font-family: "DINCondensed-Bold";
  font-weight: bold;
  color: rgba(44, 49, 53, 1);
  margin-left: 30px;
}

.ul2 li {
  display: inline-block;
  margin-right: 50px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  padding: 2px 10px;
  border-radius: 23px;
}

.h5-tit {
  font-size: 26px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(58, 59, 64, 1);
  line-height: 37px;
}

.tab {
  font-size: 14px;
}

.tab tbody tr {
  margin: 34px 0;
  line-height: 45px;
  height: 45px;
}
.tabs {
  margin-top: 20px;
}
.tabs ul {
  overflow: hidden;
  /* margin-top: 20px; */
  /* margin-bottom: 10px; */
}
.tbs-tit {
  border-bottom: 1px solid #ccc;
}
.tabs-tit li {
  float: left;
  margin-right: 50px;
  font-size: 20px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(93, 96, 99, 1);
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

.h6-tit {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(93, 96, 99, 1);
}

.part {
  height: 322px;
  overflow: hidden;
  margin-top: 20px;
}

.dv {
  height: 322px;
}

.lunwens ul li {
  float: left;
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  margin-right: 30px;
  color: #a5a7b4;
  line-height: 40px;
}

.lunwens ul li span {
  color: #5d6063;
}

.teams {
  overflow: hidden;
}

.teams li {
  margin-right: 60px;
  font-size: 20px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(93, 96, 99, 1);
  margin-bottom: 20px;
}

.teams li i {
  color: #a5a7b4;
}

.num {
  width: 24px;
  height: 24px;
  display: inline-block;
  background: rgba(47, 95, 244, 1);
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 24px;
  margin-right: 30px;
}

.tabs ul li.tabs-active {
  font-size: 26px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(58, 59, 64, 1);
  border-bottom: 4px solid #2f5ff4;
}
.xxx {
  color: #979797;
  position: absolute;
  top: 1%;
  right: 3%;
  font-size: 22px;
  transform: rotate(45deg);
  cursor: pointer;
}
.xx p {
  line-height: 40px;
}
.ifa {
  width: 500px;
  height: 370px;
  /* border: 1px solid #000; */
  padding: 0;
  margin: 0;
  margin-top: -30px;
}
/* list */

.list-inner ul {
  /* margin-top: 30px; */
  /* margin-bottom: 30px; */
}

.list-inner ul li {
  background-color: #fff;
  margin-bottom: 30px;
  cursor: pointer;
}

.list-box {
  width: 996px;
  margin: 0 auto;
  padding: 23px 0;
  overflow: hidden;
  box-shadow: 0px 8px 23px 0px rgba(230, 232, 254, 0.41);
}

.list-box h5 {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
}

.list-content {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(93, 96, 99, 1);
  margin: 16px 0;
}

.list-copy {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(165, 167, 180, 1);
}

.list-copy p:first-child span {
  display: inline-block;
  background: rgba(242, 245, 247, 1);
  border-radius: 13px;
  padding: 2px 12px;
  margin-right: 20px;
}

/* end */
.phone{
	width: 129px;
    height: 34px;
    background: rgba(251, 171, 79, 1);
    border-radius: 20px;
    text-align: center;
    line-height: 10px;
    color: #fff;
    font-size: 16px;
    font-family: "PingFangSC-Regular";
    font-weight: 400;
    cursor: pointer;
    position: absolute;
    right: 0;
}
</style>
