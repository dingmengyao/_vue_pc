<template>
  <div>
    <swiper :options="swiperOption"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
      </swiper-slide>
      <swiper-slide>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination "
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'swiper'
}
</script>