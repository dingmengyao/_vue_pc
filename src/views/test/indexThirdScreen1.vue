<template>
  <div style="position:reletive">
    <navbars class="navbars"></navbars>
    <div class="bg bg-box-1"></div>
    <div class="bg bg-box-2"></div>
    <div class="bg bg-box-3"></div>
    <div id="zhezhaoceng"></div>
    <div id="wrap">
      <h2 class="tl">国际人才共享中心</h2>
      <p class="descfordata tl">人才大数据共享中心是集人才信息交互空间、人才大数据展示空间、人才交流空间为一体的智能化感知体验空间</p>
      <ul>
        <li style="width:700px"
            @mouseenter="hoverHandle(0)">
          <div class="text">
            <p>人才综合展示中心</p>
          </div>
          <div class="box">
            <swipertemp :img1="img1">
              <!-- <img src="/static/img/2.png"
                   slot="img1">
              <img src="/static/img/4.png"
                   slot="img2"> -->
            </swipertemp>
          </div>
        </li>
        <li @mouseenter="hoverHandle(1)">
          <div class="text">
            <p>人才创业实践中心</p>
          </div>
          <div class="box">
            <swipertemp :img1="img2">
              <!-- <img src="/static/img/3.png"
                   slot="img1">
              <img src="/static/img/6.png"
                   slot="img2"> -->
            </swipertemp>
          </div>
        </li>
        <li @mouseenter="hoverHandle(2)">
          <div class="text">
            <p>人才大数据体验中心</p>
          </div>
          <div class="box">
            <swipertemp :img1="img3">
              <!-- <img src="/static/img/3.png"
                   slot="img1">
              <img src="/static/img/6.png"
                   slot="img2"> -->
            </swipertemp>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

import { swiper, swiperSlide } from "vue-awesome-swiper"
import navbars from '../navbars'
import swipertemp from './swiper/swipertemp'

$(function () {

  $('#wrap li').mouseover(function () {

    if (!$(this).hasClass('curr')) {
      $('#wrap li').removeClass('curr');
      $(this).addClass('curr');

      // 切换背景
      $('#wrap li').each(function (index) {
        if ($(this).hasClass('curr')) {
          $('.bg').fadeOut(300);
          $('.bg:eq(' + index + ')').fadeIn(500);
        }
      });

      $('.curr').stop().animate({
        width: '700px'
      }, 500, 'linear');
      $('#wrap li').not('.curr').stop().animate({
        width: '50px'
      }, 500, 'linear');
    }
  });

})
export default {
  name: 'indexThirdScreen',
  components: {
    swiper,
    swiperSlide,
    navbars,
    swipertemp,

  },
  data () {
    return {
      activeIndex: 0,
      img1: ["/static/img/2.png", "/static/img/4.png"],
      img2: ["/static/img/3.png", "/static/img/6.png"],
      img3: ["/static/img/1.png", "/static/img/7.png"],
      //   img1: [],
      //   img2: [],
      //   img3: []
    }
  },
  methods: {
    hoverHandle (index) {
      //   console.log(index)
      //   if (index == 0) {
      //     this.img1 = ["/static/img/2.png", "/static/img/4.png"]
      //   }
      //   if (index == 1) {
      //     this.img2 = ["/static/img/3.png", "/static/img/6.png"]
      //   }
      //   if (index == 2) {
      //     this.img3 = ["/static/img/1.png", "/static/img/7.png"]
      //   }

    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper1;
    }
  },
}
</script>
<style scoped>
.navbars {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000000000;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bg-box-1 {
  background: url("/static/img/2.png") no-repeat center/cover;
}
.bg-box-2 {
  background: url("/static/img/3.png") no-repeat center/cover;
}
.bg-box-3 {
  background: url("/static/img/1.png") no-repeat center/cover;
}
#wrap {
  overflow: hidden;
  width: 800px;
  height: 474px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 24px;
}
#wrap > ul > li {
  float: left;
  width: 50px;
  height: 400px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
}
#wrap > ul > li:nth-child(1) {
  background: url("/static/img/2.png") no-repeat center/cover;
}
#wrap > ul > li:nth-child(2) {
  background: url("/static/img/3.png") no-repeat center/cover;
}
#wrap > ul > li:nth-child(3) {
  background: url("/static/img/1.png") no-repeat center/cover;
}
#wrap > ul > li > .text {
  width: 50px;
  height: 100%;
  background: #000;
  opacity: 0.5;
}
#wrap > ul > li > .text p {
  padding: 20px 18px;
  font-family: "Microsoft yahei";
  color: #fff;
}
#wrap h2 {
  font-size: 30px;
  font-weight: 400px;
}
#zhezhaoceng {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.descfordata {
  margin: 8px 0;
  font-weight: 200px;
}
/*  swiper*/
.box {
  width: 700px;
  height: 400px;
}
.swiper1 {
  width: 700px;
  height: 400px;
}
</style>
