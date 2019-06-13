<template>
  <div>
    <navbars :changeBg=changeBg
             class="navbar"></navbars>
    <div class="container-fuild wraper">
      <div class="img">
        <img src="../../../static/img/banner-bg.png"
             alt=""
             style="width:100%;hieght:100%;">
      </div>

      <div class="container smallbox">
        <div class="inner-title row">
          <div class="col-md-5 col-lg-5"
               style="width: 45%">
            人才大数据平台、国际人才共享中心和国际人才共享海外联络站
          </div>
        </div>
        <div class="sub-title row">
          <div class="col-md-4 col-lg-4"
               style="width:41%">
            共享中心包括：人才综合展示中心、人才大数据中心、人才创业实践中心三大核心功能区，为地区人才的创业发展提供智能化的创新空间。
          </div>
        </div>
        <div class="sub-pic row">
          <img src="../../../static/img/dingwei1.png"
               alt="">
          <img src="../../../static/img/dingwei2.png"
               alt="">
          <img src="../../../static/img/dingwei3.png"
               alt="">
        </div>
      </div>
    </div>
    <div class="container-fuild part2">
      <div class="container part2-inner">
        <ul>
          <li class="avtive"
              :class="selected==0? 'active': ''"
              @click="selectedHandle(0)">人才大数据平台</li>
          <li :class="selected==1? 'active': ''"
              @click="selectedHandle(1)">国际人才共享中心</li>
          <li :class="selected==2? 'active': ''"
              @click="selectedHandle(2)">国际人才共享海外联络站</li>
        </ul>
        <div class="conten_box_swiper">
          <div class="swiper_list"
               :style="'margin-left:'+selected*'-1130'+'px'">
            <div class="content_swiper">
              <p>帮助政府解决“高端人才引进困难”、“地区产业发展不均衡”、“科技成果转化率低”等问题</p>
              <swipertemp :imgs="swiperImg[0].imgs"></swipertemp>
            </div>
            <div class="content_swiper">
              <p>帮助政府解决“高端人才引进困难”、“地区产业发展不均衡”、“科技成果转化率低”等问题</p>
              <swipertemp :imgs="swiperImg[1].imgs"></swipertemp>
            </div>
            <div class="content_swiper">
              <p>帮助政府解决“高端人才引进困难”、“地区产业发展不均衡”、“科技成果转化率低”等问题</p>
              <swipertemp :imgs="swiperImg[2].imgs"></swipertemp>
            </div>
          </div>
        </div>
      </div>
      <myfooter></myfooter>
    </div>
  </div>
</template>
<script>
import navbars from '@/components/navbars'
import myfooter from '@/components/myfooter'
import { swiper, swiperSlide } from "vue-awesome-swiper"
import swipertemp from '@/components/index/swiper/swipertemp'
export default {
  name: 'solution',
  components: {
    navbars,
    myfooter,
    swipertemp
  },
  data () {
    return {
      ishide: false,
      changeBg: null,
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {

          disableOnInteraction: false,
          delay: 200,
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents: true,//修改swiper的父元素时，自动初始化swiper 
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption1: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {

          disableOnInteraction: false,
          delay: 200,
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents: true,//修改swiper的父元素时，自动初始化swiper 
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption2: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {

          disableOnInteraction: false,
          delay: 200,
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents: true,//修改swiper的父元素时，自动初始化swiper 
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      selected: 0,
      swiperImg: [
        { imgs: ['../../../static/img/solution1.png', '../../../static/img/solution2.png'] },
        { imgs: ['../../../static/img/solution5.png', '../../../static/img/solution6.png'] },
        { imgs: ['../../../static/img/solution7.png', '../../../static/img/solution8.png'] },
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    // swiper0 () {
    //   return this.$refs.mySwiper0.swiper
    // },
    swiper1 () {
      return this.$refs.mySwiper1.swiper
    },
    swiper2 () {
      return this.$refs.mySwiper2.swiper
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    this.changeBg = false;
  },
  methods: {
    selectedHandle (i) {
      if (i == 0) {
        this.selected = 0;
        // this.swiper0.autoplay.start();
      }
      if (i == 1) {
        this.selected = 1

        // this.swiper1.autoplay.start();
      }
      if (i == 2) {
        this.selected = 2
        // this.swpier2.autoplay.start();
      }
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //   console.log(scrollTop)
      if (scrollTop > 0) {
        this.changeBg = true;
      } else {
        this.changeBg = false
      }
    }
  }
}
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000000;
}
.hearder {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
}

.smallbox {
  position: absolute;
  top: 20%;
  left: 4%;
}

.inner-title div {
  font-size: 30px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
}

.sub-title {
  margin-top: 1%;
  margin-bottom: 3.4%;
}

.sub-title div {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(163, 167, 245, 1);
  line-height: 24px;
}

.sub-pic img {
  margin-right: 10px;
}
.conten_box_swiper {
  height: 312px;
  overflow: hidden;
  margin-bottom: 60px;
}
.swiper_list {
  /* transition: margin 1s ease; */
}
.content_swiper {
  float: left;
  width: 1130px;
}
.part2 {
  background: rgba(15, 16, 36, 1);
  padding-top: 70px;
  /* padding-bottom: 80px; */
}
.content_swiper p {
  text-align: center;
  font-size: 12px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(198, 200, 242, 1);
  padding-bottom: 20px;
}
.part2-inner ul {
  overflow: hidden;
  width: 546px;
  margin: 0 auto;
}

.part2-inner ul li {
  float: left;
  margin: 0 30px;
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}

.part2-inner ul {
  margin-bottom: 30px;
}
.active {
  border-bottom: 2px solid #2f5ff4;
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #fff !important;
  opacity: 0 !important;
}
</style>
