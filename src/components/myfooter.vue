<template>
  <div class="copyright">
    <div class="footer">
      <ul class="clearfix unit"
          style="width:40%;">
        <h3 class="f20 h3 marB16"
            style="margin-bottom:20px!important">合作单位</h3>
        <li class="f12 ">
          <a href="	http://www.cnipa-ipdrc.org.cn/"
             target="_blank">国知局知识产权发展研究中心</a>
          <a href="http://www.cae.cn/"
             target="_blank">中国工程院</a>

        </li>
        <li class="f12 ">
          <a href="http://www.cppc.org.cn/"
             target="_blank">中国生产力促进中心协会</a>
          <a href="http://www.cas.cn/"
             target="_blank">中国科学院</a>
        </li>
        <li class="f12 ">
          <a href="http://bj.ieaschina.org/"
             target="_blank">国际欧亚科学院中国科学中心</a>
          <a href="http://www.miitec.org.cn/"
             target="_blank">工信部人才交流中心</a>
        </li>
        <li class="f12 ">
          <a href="http://www.scei.org.cn/"
             target="_blank">中国科协企业创新服务中心</a>
          <a href="http://www.cutech.edu.cn/"
             target="_blank">教育部科技发展中心</a>
        </li>
        <li class="f12 ">
          <a href="http://www.cettic.gov.cn/"
             target="_blank">人社部中国就业培训技术指导中心</a>

          <a href="http://www.most.gov.cn/"
             target="_blank">科技部科技人才中心</a>
        </li>
      </ul>
      <ul class="clearfix hzgx"
          style="width:21%">
        <h3 class="f20 h3 marB16"
            style="margin-bottom:20px!important">合作高校</h3>
        <li class="f12 ">
          <a style="width:106px;display:inline-block"
             href="http://www.tsinghua.edu.cn/"
             target="_blank">清华大学</a>
          <a href="https://www.pku.edu.cn/"
             target="_blank">北京大学</a>
        </li>
        <li class="f12 ">
          <a style="width:106px;display:inline-block"
             href="http://www.fudan.edu.cn/"
             target="_blank">复旦大学</a>
          <a href="http://www.hit.edu.cn/"
             target="_blank">哈尔滨工业大学</a>
        </li>
        <li class="f12 ">
          <a style="width:106px;display:inline-block"
             href="http://www.scu.edu.cn/"
             target="_blank">四川大学</a>
          <a target="_blank"
             href="http://www.tju.edu.cn/">天津大学</a>
        </li>
        <li class="f12 ">
          <a style="width:106px;display:inline-block"
             href="http://www.nankai.edu.cn/"
             target="_blank">南开大学</a>
          <a target="_blank"
             href="https://www.scut.edu.cn/">华南理工大学</a>
        </li>
        <li class="f12 ">
          <a style="width:106px;display:inline-block"
             href="http://www.whu.edu.cn/"
             target="_blank">武汉大学</a>
          <a target="_blank"
             href="http://www.neu.edu.cn/">东北大学 </a>
        </li>
        <li class="f12 ">
          <a style="width:106px;display:inline-block"
             href="https://www.bjtu.edu.cn/"
             target="_blank">北京交通大学</a>
          <a target="_blank"
             href="http://www.ccnu.edu.cn/">华中师范大学</a>
        </li>
      </ul>
      <ul class="clearfix"
          style="width:30%">
        <h3 class="f20 h3 marB16"
            style="margin-bottom:20px!important">联系我们</h3>
        <li class="f12 ">邮箱：service@forwork.cn</li>
        <li class="f12 ">合作电话：010-8069-9169</li>
        <li class="f12 ">客户服务电话：4006-808-565</li>
        <li class="f12 ">地址：北京市海淀区阜外亮甲店1号产业园20号楼</li>
      </ul>
      <ul class=""
          style="position:relative;padding:0">
        <h3 class="h3"
            style="margin-bottom:20px!important">关注我们</h3>
        <li class="f12 tl color_white marB16 dib marR20 border_dashed"
            id="weixin"
            style="margin-right:10px">
          <a href="javascript:;"
             target="_blank"
             @mousemove="showHandle"
             @mouseout="hideHandle"><img src="../../static/img/weixin.png" /></a>
        </li>
        <li class="f12 tl color_white marB16 dib marR20 border_dashed">
          <a href="https://weibo.com/p/1006066776185534/home?from=page_100606&mod=TAB&is_all=1#place"
             target="_blank"><img src="../../static/img/weibo.png" /></a>
        </li>
        <div class="erweima"
             style=""
             v-show="ishide">
          <!-- <img src="../../" alt=""> -->
          <img src="../../static/img/erweima.jpg"
               alt=""
               width="100%" />
        </div>
      </ul>
      <p class="f12 tc color_white ICPtxt fl"
         style="margin-bottom:30px">京ICP备18033816号 北京中科梧桐网络科技有限公司 版权所有</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myfooter',
  data () {
    return {
      ishide: false
    }
  },
  methods: {
    showHandle () {
      this.ishide = true;
    },
    hideHandle () {
      this.ishide = false;
    }
  }
}
</script>
<style scoped>
.copyright {
  width: 100%;
  margin: 0 auto;
  background: rgba(86, 88, 89, 1);
  padding-top: 45px;
  background: rgba(86, 88, 89, 1);
  /* margin-top:70px; */
}

.footer {
  max-width: 1100px !important;
  margin: 0 auto !important;
  overflow: hidden;
}
.footer ul {
  float: left;
}
.footer ul li {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  float: initial;
  color: rgba(251, 253, 255, 1);
  margin-right: 10px;
}

.footer ul li:hover {
  color: rgba(251, 253, 255, 1);
}

.footer ul li a {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(251, 253, 255, 1);
}

.ICPtxt {
  width: 100%;
  display: block;
  margin-top: 37px;
}

.h3 {
  font-size: 18px !important;
  font-family: "PingFangSC-Semibold" !important;
  font-weight: 600 !important;
  color: rgba(255, 255, 255, 1) !important;
  margin-bottom: 20px;
}

#navy > li > a > span:hover {
  color: #2f5ff4;
}

.footer p {
  text-align: center;
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(251, 253, 255, 1);
}
.unit li a:first-child {
  display: inline-block;
  width: 224px;
}

.unit li a:last-child {
  display: inline-block;
  width: 170px;
}

.hzgx li a:first-child {
  width: 87px !important;
}
.erweima {
  width: 100px;
  /* display: none; */
  position: absolute;
  right: -34%;
  bottom: -116px;
}
.dib {
  display: inline-block !important;
}
</style>
