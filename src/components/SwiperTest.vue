<template>
<div class="swiperTest container-1440 d-flex main-margin-top pos-relative">
    <div class="title main-brow-text">
        <h1>SwiperTest</h1>
        <p>SwiperTest</p>
    </div>
    <div class="list pos-relative">
        <swiper
            :modules="modules"
            :loop="swiperOption.loop"
            :fadeEffect="{
                crossFade: true
            }"
            :autoplay="swiperOption.autoplay"
            :slides-per-view="3.5"
            :space-between="30"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
        </swiper>
        <div @click="prevFn" class="swiper-button swiper-prev-btn">
            <i class="icon-left-open main-white-text"></i>
        </div>
        <div @click="nextFn" class="swiper-button swiper-next-btn">
            <i class="icon-right-open main-white-text"></i>
        </div>
    </div>
</div>
  
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
                spaceBetween: 30,//间距
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
                    nextEl: ".swiper-next-btn",
                    prevEl: ".swiper-prev-btn",
                },
                //   nextButton: '.swiper-button-next2',
                //   prevButton: '.swiper-button-prev2',
                loop: true,
                autoplay: false,
              // {
              //   delay: 2000,
              //   disableOnInteraction: false, // 鼠标滑动后继续自动播放
              // },
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
        prevFn() {
            console.log('prevFn',this.swiper);
            this.swiper.slidePrev();
        },
        nextFn() {
            console.log('nextFn',this.swiper);
            this.swiper.slideNext();
        },
    },
    setup() {
        return {
            // modules: [Navigation, Pagination, Scrollbar, A11y],
            modules: [EffectFade,Autoplay],
        };
    },
  };
</script>
 
<style lang="scss">
.swiperTest {
    justify-content: space-between;
    .container-1440 {
        padding: 0 40px;
    }
    .list {
        width: 80%;
    }
}

.swiper-button {
    cursor: pointer;
    position: absolute;
    top: 140px;
    font-size: 24px;
    z-index: 2;
    &.swiper-next-btn {
        right: -37px;
    }
    &.swiper-prev-btn {
        left: -37px;
    }
}

.swiper-slide {
    height: 300px;
    line-height: 300px;
    font-size: 30px;
    text-align: center;
    background-color: pink;
}
</style>
