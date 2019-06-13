<template>
  <div style="position:reletive">
    <!-- <navbars class="navbars"></navbars> -->
    <div class="bg bg-box-1"></div>
    <div class="bg bg-box-2"></div>
    <div class="bg bg-box-3"></div>
    <div id="zhezhaoceng"></div>
    <div id="wrap">
      <h2 class="tl">国际人才共享中心</h2>
      <p class="descfordata tl">人才大数据共享中心是集人才信息交互空间、人才大数据展示空间、人才交流空间为一体的智能化感知体验空间</p>
      <ul>
        <li style="width:700px">
          <div class="text">
            <p>人才综合展示中心</p>
          </div>
          <div class="box1">
            <div class="div1">
              <p class="slide1">
                <!-- <img src="/static/img/2.png"
                     alt=""> -->
                <img src="../../../static/img/2.png"
                     alt="">
              </p>

              <p class="slide1"> <img src="../../../static/img/4.png"
                     alt=""></p>
            </div>
            <ol class="ol1"></ol>
          </div>
        </li>
        <li>
          <div class="text">
            <p>人才创业实践中心</p>
          </div>
          <div class="box2">
            <div>
              <p>
                <img src="../../../static/img/3.png"
                     alt="">
              </p>

              <p> <img src="../../../static/img/6.png"
                     alt=""></p>
            </div>
            <ol class="ol1"></ol>
          </div>
        </li>
        <li>
          <div class="text">
            <p>人才大数据体验中心</p>
          </div>
          <div class="box3">
            <div>
              <p>
                <img src="../../../static/img/1.png"
                     alt="">
              </p>

              <p> <img src="../../../static/img/7.png"
                     alt=""></p>
            </div>
            <ol class="ol1"></ol>
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
      img1: ["../../../static/img/2.png", "../../../static/img/4.png"],
      img2: ["../../../static/img/3.png", "../../../static/img/6.png"],
      img3: ["../../../static/img/1.png", "../../../static/img/7.png"],
      //   img1: [],
      //   img2: [],
      //   img3: []
    }
  },

  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper1;
    }
  },
  created () {
    $(function () {


      var $box1 = $(".box1"),
        lisSize1 = $box1.find("div p").length,

        lisArr1 = [],
        liWidth1 = $box1.find("div p").width(),
        curr1 = 0,
        timer1 = null;
      //   console.log($box1.find("div p"))
      $box1.find('div').append($box1.find('div p').first().clone());
      function Timer1 () {
        timer1 = setInterval(function () {

          curr1++;
          if (curr1 > lisSize1) {
            curr1 = 1;
            $box1.find("div").css('margin-left', 0);
          }
          $box1.find("div").stop().animate({
            'margin-left': liWidth1 * curr1 * -1
          }, 1000);
          //   console.log("第一个轮播的下标" + curr1)
          let bgUrl = $('.box1 div p').eq(curr1).find('img').attr('src');
          $('.bg:eq(0)').css({ 'background': "url(" + bgUrl + ") no-repeat center/cover" })
        }, 3500);
      }
      var $box2 = $(".box2"),
        lisSize2 = $box2.find("div p").length,

        lisArr2 = [],
        liWidth2 = $box2.find("div p").width(),
        curr2 = 0,
        timer2 = null;
      $box2.find('div').append($box2.find('div p').first().clone());
      function Timer2 () {
        timer2 = setInterval(function () {

          curr2++;
          if (curr2 > lisSize2) {
            curr2 = 1;
            $box2.find("div").css('margin-left', 0);
          }
          $box2.find("div").stop().animate({
            'margin-left': liWidth2 * curr2 * -1
          }, 1000);
          console.log("第二个轮播的下标" + curr2)
          let bgUrl = $('.box2 div p').eq(curr2).find('img').attr('src');
          $('.bg:eq(1)').css({ 'background': "url(" + bgUrl + ") no-repeat center/cover" })
        }, 3500);
      }
      var $box3 = $(".box3"),
        lisSize3 = $box3.find("div p").length,

        lisArr3 = [],
        liWidth3 = $box3.find("div p").width(),
        curr3 = 0,
        timer3 = null;
      $box3.find('div').append($box3.find('div p').first().clone());
      function Timer3 () {
        timer3 = setInterval(function () {

          curr3++;
          if (curr3 > lisSize3) {
            curr3 = 1;
            $box3.find("div").css('margin-left', 0);
          }
          $box3.find("div").stop().animate({
            'margin-left': liWidth3 * curr3 * -1
          }, 1000);
          let bgUrl = $('.box3 div p').eq(curr3).find('img').attr('src');
          $('.bg:eq(2)').css({ 'background': "url(" + bgUrl + ") no-repeat center/cover" })
        }, 3500);
      }
      $('#wrap li').mouseover(function () {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
        if ($(this).index() == '0') {
          Timer1()
        } else {
          clearInterval(timer1)
        }
        if ($(this).index() == '1') {
          Timer2()
        } else {
          clearInterval(timer2)
        }
        if ($(this).index() == '2') {
          Timer3()
        } else {
          clearInterval(timer3)
        }
        if (!$(this).hasClass('curr')) {
          $('#wrap li').removeClass('curr');
          $(this).addClass('curr');

          // 切换背景
          $('#wrap li').each(function (index) {
            console.log(111)
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
  },
}
</script>
<style scoped>
.navbars {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200000;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bg-box-1 {
  background: url("../../../static/img/2.png") no-repeat center/cover;
}
.bg-box-2 {
  background: url("../../../static/img/3.png") no-repeat center/cover;
}
.bg-box-3 {
  background: url("../../../static/img/1.png") no-repeat center/cover;
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
/* #wrap > ul > li:nth-child(1) {
  background: url("/static/img/2.png") no-repeat center/cover;
}
#wrap > ul > li:nth-child(2) {
  background: url("/static/img/3.png") no-repeat center/cover;
}
#wrap > ul > li:nth-child(3) {
  background: url("/static/img/1.png") no-repeat center/cover;
} */
#wrap > ul > li > .text {
  width: 50px;
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: absolute;
  z-index: 20000;
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
/*  */
.box1 {
  width: 700px;
  height: 400px;
  overflow: hidden;
  position: relative;
  /* position: absolute;
  top: 0;
  left: 0; */
  z-index: 500;
}

.box1 div {
  width: 3000px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}

.box1 div p {
  float: left;
  width: 700px;
  height: 400px;
  text-align: center;
  line-height: 324px;
  font-size: 50px;
  font-weight: bolder;
}

.box1 div p img {
  width: 700px;
  height: 400px;
}

.box2 {
  width: 700px;
  height: 400px;
  overflow: hidden;
  position: relative;
  /* position: absolute;
  top: 0;
  left: 0; */
  z-index: 500;
}

.box2 div {
  width: 3000px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}

.box2 div p {
  float: left;
  width: 700px;
  height: 400px;
  text-align: center;
  line-height: 324px;
  font-size: 50px;
  font-weight: bolder;
}

.box2 div p img {
  width: 700px;
  height: 400px;
}

.box3 {
  width: 700px;
  height: 400px;
  overflow: hidden;
  position: relative;
  /* position: absolute;
  top: 0;
  left: 0; */
  z-index: 500;
}

.box3 div {
  width: 3000px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}

.box3 div p {
  float: left;
  width: 700px;
  height: 400px;
  text-align: center;
  line-height: 324px;
  font-size: 50px;
  font-weight: bolder;
}

.box3 div p img {
  width: 700px;
  height: 400px;
}
</style>
