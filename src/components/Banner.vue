<template>
    <div class="banner">
        <swiper
        :modules="modules"
        :loop="swiperOption.loop"
        :effect="swiperOption.effect"
        :autoplay="swiperOption.autoplay"
        :speed="swiperOption.speed"
        @swiper="onSwiper"
        class="swiper-scale-effect"
        >
            <swiper-slide v-for="(item, index) in swiperList" :key="index">
                <div class="slide-bg swiper-slide-cover" :class="item.class" :style="{backgroundImage:'url('+item.img+')'}">
                    <div class="blackHide"></div>
                </div> 
            </swiper-slide>
        </swiper>
        <div class="banner-text">
            <p class="title">{{bannerText.topText}}</p>
            <p class="content">{{bannerText.bottomText}}</p>
        </div>
    </div>
</template>
<script>
import { Navigation, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css'

export default {
    data() {
        return {
            swiper: null,
            swiperOption: {
                effect:'fade',
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                speed: 1000,
            },
            swiperList: [
                {
                    img: require('../assets/images/index/banner01.jpg'),
                },
                {
                    img: require('../assets/images/index/banner02.jpg'),
                },
            ],
            bannerText: {
                topText:'美味與人的入心追求',
                bottomText:'茶六 おもてなし'
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
        }
    },
    setup() {
        return {
            modules: [ Navigation, EffectFade, Autoplay ],
        };
    },
  };
</script>

<style lang="scss">
@keyframes scaleAmim {
    from {
        transform: scale(1.2);
    }
    to {
        transform: scale(1);
    }
}

.banner {
    height: 100vh;
    .swiper-scale-effect .swiper-slide.swiper-slide-active .swiper-slide-cover {
        animation: scaleAmim 8s;
        animation-fill-mode: forwards;
        transition:10s;
    }
    .swiper-slide-prev .swiper-slide-cover {
        transform: scale(1);
        transition:10s;
    }
    position: relative;
    .swiper-slide {
        height: 100vh;
        .slide-bg {
            background-size: cover;
            background-position: center;
            height: 100%;
        }
    }
    .banner-text {
        position: absolute;
        bottom: 0;
        padding: 120px;
        z-index: 1;
        text-align: right;
        letter-spacing: 4px;
        color: #fff;
        text-shadow: black 0.1em 0.1em 0.2em;
        .title {
            font-size: 44px;
        }
        .content {
            font-size: 28px;
            margin: 20px 0px;
        }
    }
}
</style>