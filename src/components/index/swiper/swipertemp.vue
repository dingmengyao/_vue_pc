<template>
  <div>
    <swiper :options="swiperOption"
            ref="mySwiper"
            class="swiper">
      <swiper-slide v-for="(item,index) in imgs"
                    :key="index"><img :src="item"
             alt=""
             width="100%"
             height="270">
        <!-- <slot name="img1"></slot> -->
      </swiper-slide>
      <!-- <swiper-slide>
        <slot name="img2"></slot>
      </swiper-slide> -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  name: 'swipertemp',
  components: {
    swiper,
    swiperSlide
  },
  props: ['imgs'],
  data () {
    const that = this
    return {
      swiperOption: {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // autoplay: false,
        speed: 500,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement: 'li', //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true,  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          //   dynamicMainBullets: 2, //动态分页器的主指示点的数量
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。

        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents: true,//修改swiper的父元素时，自动初始化swiper 
        on: {
          slideChangeTransitionStart: function (swiper) {
            // console.log(swiper)
          }
        },
        // pagination: '.swiper-pagination',

      }
    }
  }
}
</script>
<style scoped>
.swiper {
  height: 274px;
}
</style>
