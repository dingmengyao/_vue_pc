<template>
  <div>
    <!-- <navbar :selectIndex=selectIndex></navbar> -->
    <div class="wrap">
      <div class="nav">
        <div class="logo">
          <img src="../../../static/img/logo-dark.png"
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
    <div class="container-fuild"
         style="background:#e0e0e0;padding-top:60px;padding-bottom:60px;margin-top: 70px;overflow: hidden;">
      <div style="width:1170px;margin:0 auto;">
        <h4 class="tit-h4">成果评定</h4>
        <div>
          <div class="icons">
            <img src="../../../static/img/icon1.png"
                 alt=""
                 width="100%" />
            <div>
              <h5>科技成果鉴定</h5>
              <span>科技奖申报、职称评定、 技术水平认定</span>
            </div>
          </div>
          <div class="icons">
            <img src="../../../static/img/icon2.png"
                 alt=""
                 width="100%" />
            <div>
              <h5>项目立项评估</h5>
              <span>项目引进、项目投资、 研发规划</span>
            </div>
          </div>
          <div class="icons">
            <img src="../../../static/img/icon3.png"
                 alt=""
                 width="100%" />
            <div>
              <h5>项目结题评价</h5>
              <span>项目结题、绩效评估、成果 转化、项目后补助</span>
            </div>
          </div>
          <div class="icons">
            <img src="../../../static/img/icon4.png"
                 alt=""
                 width="100%" />
            <div>
              <h5>知识产权评价</h5>
              <span>专业授权、技术转让、技术 交易、融资贷款</span>
            </div>
          </div>
          <div class="icons">
            <img src="../../../static/img/icon5.png"
                 alt=""
                 width="100%" />
            <div>
              <h5>成果价值评估</h5>
              <span>项目孵化、技术投入、 风险投资</span>
            </div>
          </div>
          <div class="icons">
            <img src="../../../static/img/icon6.png"
                 alt=""
                 width="100%" />
            <div>
              <h5>人才团队评价</h5>
              <span>人才引进、创新团队申报</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part2">
      <h4 class="tit-h4">评审专家</h4>
      <div style="width:1170px;margin-top:30px auto;overflow:hidden">
        <div class="tanlent-list">
          <div class="tanlent">
            <p>
              <!-- <span class="liuyulan"><img src="../../../static/img/liuyulan.png" alt=""></span> -->
              <img src="../../../static/img/liuyulan.png"
                   alt="" />
              <img src="../../../static/img/douhao.png"
                   alt="" />
            </p>
            <div>
              <h5>刘玉兰&nbsp;&nbsp;<span>中国生产力促进中心协会理事长</span></h5>
              <p>
                国家科技部重大专项办原巡视员，科技部诚信办公室原副主任，先后在科技部办公厅、工业司、高新司、计划司、重大办等部门任副处长、处长、副巡视员、巡视员。
              </p>
            </div>
          </div>
          <div class="tanlent">
            <p>
              <img src="../../../static/img/wangxiuyi.png"
                   alt="" />
              <img src="../../../static/img/douhao.png"
                   alt="" />
            </p>
            <div>
              <h5>王秀义&nbsp;&nbsp;<span>科技日报社原机关党委书记</span></h5>
              <p>
                科技部监察局主任、科技部机关服务局党委书记、科技日报社编委、机关党委书记兼大众科技报社社长、科技文摘报社长
              </p>
            </div>
          </div>
          <div class="tanlent">
            <p>
              <img src="../../../static/img/haoqiang.png"
                   alt="" />
              <img src="../../../static/img/douhao.png"
                   alt="" />
            </p>
            <div>
              <h5>郝强&nbsp;&nbsp;<span>科学技术部人才交流开发服务中心</span></h5>
              <p>
                中国科技信息研究所办公室副主任、进出口业务部副主任、主任、万方数据公司副总经理、成果推广中心副主任、影视中心主任、电子出版社社长、科技部科技人才中心副主任等
              </p>
            </div>
          </div>
          <div class="tanlent">
            <p>
              <img src="../../../static/img/dongqingjiu.png"
                   alt="" />
              <img src="../../../static/img/douhao.png"
                   alt="" />
            </p>
            <div>
              <h5>董庆九&nbsp;&nbsp;<span>中国工程院办公厅主任、新闻发言人</span></h5>
              <p>
                中国工程院办公厅主任、新闻发言人，中国工程院办公厅研究室副主任、办公厅副主任、政策研究室副主任（主持工作）、办公厅巡视员，国家科学技术部办公厅秘书二处、秘书一处秘书、新闻宣传办公室主任等
              </p>
            </div>
          </div>
          <div class="tanlent">
            <p>
              <img src="../../../static/img/zhoujian.png"
                   alt="" />
              <img src="../../../static/img/douhao.png"
                   alt="" />
            </p>
            <div>
              <h5>周建&nbsp;&nbsp;<span>中国科学院人才交流开发中心顾问</span></h5>
              <p>
                中国科学院人才交流开发中心顾问、中科创服（北京）科技发展有限公司总经理、中国科学院大学校友会创业与投资校友联合会宣传部负责人、中国生产力促进中心协会人才共享研究院专家顾问、国科创新研究院北京负责人
              </p>
            </div>
          </div>
          <div class="tanlent">
            <p>
              <img src="../../../static/img/zhangmengjun.png"
                   alt="" />
              <img src="../../../static/img/douhao.png"
                   alt="" />
            </p>
            <div>
              <h5>张孟军&nbsp;&nbsp;<span>科技日报社驻美国纽约资深记者</span></h5>
              <p>
                科技部国际合作司顾问、华盛顿首席记者，科技日报报社编委、国际部主任，科技日报社驻美国纽约资深记者；曾获国家软科学研究的“国家科学技术进步”二等奖，并享受“政府特殊津贴”
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 class="tit-h4"
          style="margin-top:24px!important;">评审机构</h4>
      <div style="padding-bottom:60px;width:1170px;margin:0 auto;    overflow: hidden;">
        <div class="organizations">
          <div class="tanlent organization ">
            <img src="../../../static/img/jiaoyubu-bg.png"
                 alt=""
                 width="100%" />

            <div>
              <h5>
                <img src="../../../static/img/jiaoyubu.png"
                     class="jiaoyubu-icons"
                     alt="" />教育部科技发展中心
              </h5>
              <p>
                承担高校有关科研基金、科研成果、科技开发、成果转化与推广、科技产业等方面的管理工作，并为教育部在高等学校科技政策方面提供咨询和建议。
              </p>
            </div>
          </div>
          <div class="tanlent organization ">
            <img src="../../../static/img/shengchanli-bg.png"
                 alt=""
                 width="100%" />

            <div>
              <h5>
                <img src="../../../static/img/shengchanli.png"
                     class="jiaoyubu-icons"
                     alt="" />中国生产力促进中心协会
              </h5>
              <p>
                由全国各生产力促进中心以及从事中小企业生产力促进工作的相关企事业单位和个人，自愿结成的全国性、非营利性社会组织。
              </p>
            </div>
          </div>
          <div class="tanlent organization ">
            <img src="../../../static/img/guojiazhishi-bg.png"
                 alt=""
                 width="100%" />

            <div>
              <h5>
                <img src="../../../static/img/guojiazhishi.png"
                     class="jiaoyubu-icons"
                     alt="" />国家知识产权局
              </h5>
              <p>
                保护知识产权工作，推动知识产权保护体系建设，负责商标、专利、原产地地理标志的注册登记和行政裁决，指导商标、专利执法工作等。
              </p>
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
.tit-h4 {
  font-size: 26px;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(98, 100, 116, 1);
  text-align: center;
}

.icons {
  position: relative;
  margin-bottom: -30px;
  width: 30%;
  float: left;
  margin: 10px 19px;
}

.icons div {
  min-height: 80px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 28%;
  text-align: center;
}

.icons div h5 {
  font-size: 18px;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(61, 65, 70, 1);
  margin: 10px 0;
}

.icons div span {
  font-size: 12px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(151, 157, 167, 1);
}
.logo {
  float: left;
}
.tabs {
  float: left;
}
/* xxxx */
.part2 {
  padding: 60px;
  background: rgba(247, 248, 249, 1) url("../../../static/img/bg.png") no-repeat
    center;
  background-size: 100% 100%;
}

.part2 .row {
  margin: 0 auto;
}
.tanlent-list {
  width: 1170px;
  margin: 0 auto;
  overflow: hidden;
}
.tanlent {
  background-color: #fff;
  border-radius: 4px;
  width: 24%;
  margin: 38px 14px;
  min-height: 200px;
  padding: 20px 40px 10px 40px;
  float: left;
}

.tanlent p {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* .liuyulan {
            width: 90px;
            display: inline-block;
            margin-top: -76px;
           
        }
        .liuyulan img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
        } */
.tanlent p img:first-child {
  width: 30%;
  margin-top: -60px;
}

.tanlent p img:nth-child(2) {
  width: 20px;
}

.tanlent div h5 {
  font-size: 18px;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(61, 65, 70, 1);
  margin-top: 10px;
}

.tanlent div h5 span {
  font-size: 12px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(151, 157, 167, 1);
}

.tanlent div p {
  font-size: 12px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(151, 157, 167, 1);
  line-height: 20px;
  margin-top: 10px;
}

.organization {
  padding: 0;
  position: relative;
  border-radius: 0;
  width: 30%;
}

.organization div {
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
}

.organization .jiaoyubu-icons {
  width: 20%;
}
</style>
