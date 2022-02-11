<template>
<div class="foodListSwiper pos-relative">
    <div class="w-100 pos-relative">
        <swiper
            :modules="modules"
            :loop="swiperOption.loop"
            :autoplay="swiperOption.autoplay"
            :speed="swiperOption.speed"
            :slides-per-view="swiperOption.slidesPerView"
            :space-between="swiperOption.spaceBetween"
            @swiper="onSwiper"
        >
            <swiper-slide  v-for="(meal, index) in foodListDataMeal" :key="index">
                <div class="food main-grayBg-img">
                    <div class="img bg-fit" :style="{backgroundImage:'url('+meal.img+')'}">
                        <div :style="{backgroundColor:`${mealTitleBgColor[index]}`}" class="title fw-700">{{meal.name}}</div>
                    </div>
                    <div class="mealData">
                        <p class="text-cenetr main-brow-text fw-700">NT.{{meal.price}} / 雙人</p>
                        <p class="food-title">主食</p>
                        <p class="txt meat main-white-333">{{meal.food}}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div @click="prevFn" class="swiper-button swiper-prev-btn">
            <i class="icon-left-open"></i>
        </div>
        <div @click="nextFn" class="swiper-button swiper-next-btn">
            <i class="icon-right-open"></i>
        </div>
        <div class="otherFood main-grayBg-img" >
            <p class="fw-700">以上套餐均附</p>
            <div class="d-flex">
                <div v-for="(side, index) in foodListDataSide" :key="index" class="other-block">
                    <p class="food-title">{{side.type}}</p>
                    <p v-for="(food, index) in side.food" :key="index" class="txt">{{food}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css'

import foodListData from '@/assets/datas/foodListData.json';
 
export default {
    data() {
        return {
            swiper: null,
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                speed: 1000,
            },
            foodListDataMeal: foodListData.meal,
            foodListDataSide: foodListData.side,
            mealTitleBgColor: [
                '#aa8343cb', '#6b5128cb', '#C1625Dcb', '#A7372Bcb', '#2b1f14cb'
            ],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
            // console.log(swiper);
        },
        prevFn() {
            // console.log('prevFn',this.swiper);
            this.swiper.slidePrev();
        },
        nextFn() {
            // console.log('nextFn',this.swiper);
            this.swiper.slideNext();
        },
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
  };
</script>
 
<style lang="scss">
@import "@/assets/scss/_variable.scss";

.foodListSwiper {
    margin: 60px 0;
    .swiper-button {
        cursor: pointer;
        position: absolute;
        color: $main-white-555;
        transition: .3s all;
        top: 50%;
        font-size: 24px;
        z-index: 2;
        &:hover {
            color: $main-white-text;
        }
        &.swiper-next-btn {
            right: -37px;
        }
        &.swiper-prev-btn {
            left: -37px;
        }
    }
    .swiper-slide {
        .food {
            letter-spacing: 2px;
            .img {
                height: 250px;
                border-right: 3px solid #fff;
                position: relative;
            }  
            .title {
                position: absolute;
                bottom: 0;
                color: #fff;
                letter-spacing: 3px;
                width: 100%;
                height: 50px;
                line-height: 53px;
                font-size: 18px;
                text-align: center;
            }
            .mealData {
                padding: 20px 30px;
                border-right: 1px solid $main-white-opcity-text;
                .meat {
                    height: 105px;
                }
            }
        }
    }
    .food-title {
        color: $main-white-text;
        font-weight: 700;
        background-color: $main-white-555;
        width: 45px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        text-align: center;
        border-radius: 5px;
        margin: 10px 5px 10px 0;
    }
    .otherFood {
        padding: 20px 30px;
        margin-top: -2px;
        &>p {
            position: relative;
            margin-bottom: 10px;
            font-size: 18px;
            color: $main-white-555;
            &::before {
                content: '';
                width: calc(100% - 130px);
                height: 2px;
                background-color: $main-white-999;
                position: absolute;
                right: 0;
                top: 30%;
            }
        }
        .other-block {
            margin-right: 10px;
            min-width: 85px;
            max-width: 160px;
            width: 15%;
        }
    }
    .txt {
        line-height: 28px;
        font-weight: 700;
    }    
}
</style>
