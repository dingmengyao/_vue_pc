<template>
  <div style="height:100%">
    <swiper :options="swiperOption"
            ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <img src="../../../static/img/firstScreen.png"
             alt=""
             width="100%">
      </swiper-slide>
      <swiper-slide class="swiper-slide">

        <div class="second-screen">全球高端人才汇聚，人才与产业对接</div>
        <video src="../../../static/media/WeChat.mp4"
               preload="auto"
               data-autoplay
               autoplay="autoplay"
               loop="loop"
               muted="muted"
               x5-video-player-type="h5"
               id="player"
               height="100%"
               width="100%"
               webkit-playsinline
               playsinline
               x5-playsinline
               x5-video-player-fullscreen="true">
          your browser does not support the video tag
        </video>

      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import navbars from '../navbars'
export default {
  name: "indexFirstScreen",
  components: {
    swiper,
    swiperSlide,
    navbars
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        width: window.innerWidth,
        //自动播放
        autoplay: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 设置轮播
        //   effect : 'flip',
        //滑动速度
        speed: 500,
        //滑动方向
        direction: 'horizontal',
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
        //分页器设置         
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperSlides: [1, 2, 3, 4]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
};
</script>
<style scoped>
.navbars {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
}
.swiper-slide {
  /* height: 100%; */
  /* width: 100% !important; */
}
.swiper-slide img {
  /* width: 100%; */
  /* height: 100%; */
}
.swiper-slide video {
  /* width: 100% !important; */
}
.second-screen {
  position: absolute;
  top: 26%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  z-index: 100;
  width: 100%;
  text-align: center;
}
</style>

