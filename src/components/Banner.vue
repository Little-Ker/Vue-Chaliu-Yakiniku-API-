<template>
  <swiper
    :modules="modules"
    :loop="swiperOption.loop"
    effect="fade"
    :fadeEffect="{
        crossFade: true
    }" 
    :autoplay="swiperOption.autoplay"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
  <button @click="handleSlideTo">slide to 3</button>
</template>
<script>
import { Navigation, Pagination, EffectFade,  Autoplay, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css'

export default {
  data() {
    return {
        swiper: null,
      swiperOption: {
        //slidesPerView: 3,//展示三个
        //slidesPerColumn: 2,//行数
        //spaceBetween: 30,//间距
        //effect:'fade',//渐变效果
        // effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true, //设置slide居中
        slidesPerView: 'auto',//解决最后一张切换到第一张中间的空白
        coverflowEffect: {
          rotate: 50, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 0, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
          depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: true, //开启slide阴影。默认 true。
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false, // 鼠标滑动后继续自动播放
        },
          speed: 1000,//滑动速度
        },
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
          this.swiper = swiper;
        console.log(swiper);
      },
      onSlideChange(swiper) {
        console.log('slide change',swiper);
      },
      handleSlideTo() {
        console.log('this.swiper',this.swiper);
        this.swiper.slideTo(3);
      },
    },
    setup() {
      return {
        // modules: [Navigation, Pagination, Scrollbar, A11y],
        modules: [Navigation,EffectFade,Autoplay],
      };
    },
  };
</script>

<style>
.swiper-slide {
  height: 300px;
  line-height: 300px;
  font-size: 30px;
  text-align: center;
  background-color: pink;
}
</style>