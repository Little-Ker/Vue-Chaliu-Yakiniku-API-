<template>
    <div class="delicacy">
        <div class="d-flex justify-content-bewteen container-1440">
            <div class="title">
                <h1 class="main-brow-text">美食饗宴</h1>
                <p class="main-brow-text">Delicacy</p>
            </div>
            <div class="food-list d-flex justify-content-around">
                <div class="item d-flex" v-for="(item, index) in foodTitleList" :key="index">
                    <div class="food-item-img">
                        <div class="bgScale bg-fit transition-0-6" :style="{backgroundImage:'url('+item.img+')'}"></div>
                    </div>
                    <p class="food-item-title main-brow-text fw-700">{{item.title}}</p>
                    <a class="btn-arrow align-self-end">
                        <span class="arrow"></span>
                        <span class="btn-arrow-text main-gray-text fw-700 transition-0-3">View More</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-bewteen">
            <div class="moreBtn align-self-end">
                <a class="btn-border">
                    <span class="btn-border-text fw-700 transition-0-3">線上菜單</span>
                </a>
            </div>
            <div class="marquee-swiper">
                <swiper
                :modules="modules"
                :speed="swiperOption.speed"
                :loop="swiperOption.loop"
                :free-mode="swiperOption.freeMode"
                :autoplay="swiperOption.autoplay"
                :slides-per-view="swiperOption.slidesPerView"
                :space-between="swiperOption.spaceBetween"
                >
                    <swiper-slide class="bg-fit" v-for="(item, index) in foodMarqueeAry" :key="index" :style="{backgroundImage:'url('+item.img+')'}">
                        <div class="blackHide transition-0-1 d-flex justify-content-center align-items-center">
                            <div class="blackHide-border transition-0-1">
                                <p class="transition-0-1 main-white-text">{{item.name}}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css'

import foodListData from '@/assets/datas/foodListData.json';

export default {
    data() {
        return {
            foodListFoodData: foodListData.food,
            foodTitleList: [
                {
                    img: require('@/assets/images/index/delicacy/01.jpg'),
                    title: '開胃小品',
                    link: ''
                }, {
                    img: require('@/assets/images/index/delicacy/02.jpg'),
                    title: '套餐主食',
                    link: ''
                }, {
                    img: require('@/assets/images/index/delicacy/03.jpg'),
                    title: '海鮮蔬食',
                    link: ''
                }, {
                    img: require('@/assets/images/index/delicacy/04.jpg'),
                    title: '甜點飲品',
                    link: ''
                }
            ],
            swiper: null,
            swiperOption: {
                speed: 6000,
                loop: true,
                freeMode: true,
                slidesPerView: 5,
                spaceBetween: 30,
                autoplay: {
                    delay: 1,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
            },
        }
    },
    computed: {
        foodMarqueeAry() {
            return this.foodListFoodData.filter((food) => {
                return food.name.length === 4;
            })
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [ Autoplay, FreeMode ],
        };
    },
}
</script>

<style lang="scss">
.swiper-free-mode>.swiper-wrapper {
    -webkit-transition-timing-function: linear;
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    margin: 0 auto;
}
</style>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.delicacy {
    .marquee-swiper {
        width: 80%;
        height: 160px;
        .swiper {
            width: 100%;
            height: 100%;
        }
    }
    overflow: hidden;
    margin-top: 110px;
    .title {
        margin-right: 30px;
        margin-bottom: 30px;
        h1 {
            font-size: 36px;
            margin-bottom: 10px;
        }
        p {
            font-size: 18px;
            margin-left: 3px;
        }
    }
    .food-list {
        width: calc(100% - 200px);
        margin-bottom: 60px;
        .item {
            .food-item-img {
                overflow: hidden;
                width: 120%;
                height: 230px;
                position: absolute;
                bottom: 17%;
                left: -45%;
                box-shadow: rgba(0, 0, 0, 0.8) 0px 15px 20px -10px;
            }
            position: relative;
            cursor: pointer;
            width: 160px;
            height: 400px;
            border: 2px solid $main-white-opcity-text;
            border-right: 0;
            margin-left: 30px;
            transition: .3s all;
            &::after,
            &::before {
                transition: .3s all;
                content: '';
                position: absolute;
                right: 0;
                height: 5%;
                border-right: 2px solid $main-white-opcity-text;
            }
            &::after {
                top: 0;
            }
            &::before {
                bottom: 0;
            }
            .food-item-title {
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                right: -12px;
                top: 10%;
                letter-spacing: 3px;
                font-size: 24px;
                &::before {
                    content: '';
                    position: absolute;
                    transition: .3s all;
                    right: 12px;
                    top: 47px;
                    width: 2px;
                    height: 130px;
                    background-color: $main-white-opcity-text;
                }
            }
            .btn-arrow {
                margin-bottom: 13px;
            }
            .btn-arrow-text {
                writing-mode: vertical-lr;
                height: 100px;
                position: absolute;
                right: -6px;
                bottom: 70%;
            }
            &:hover {
                border-color: rgba(255, 255, 255, 0.45);
                &::after,
                &::before {
                    border-color: rgba(255, 255, 255, 0.45);
                }
                .arrow {
                    width: 50px;
                    background-color: $main-white-text;
                }
                .btn-arrow-text {
                    color: $main-white-text;
                }
                .bgScale {
                    transform: scale(1.1);
                }
                .food-item-title::before {
                    background-color: rgba(255, 255, 255, 0.45);
                }
            }
        }
    }
    .moreBtn {
        padding-left: calc((100% - 1440px) / 2);
    }
    .marquee-swiper {
        .swiper-slide {
            &:hover .blackHide {
                background-color: rgba(0, 0, 0, 0.7);
                .blackHide-border {
                    opacity: 1;
                }
            }
            .blackHide {
                background-color: rgba(0, 0, 0, 0.5);
                .blackHide-border {
                    opacity: 0;
                    border: 2px solid $main-white-text;
                    padding: 15px 18px;
                    text-align: center;
                    font-size: 16px;
                    p {
                        line-height: 20px;
                        letter-spacing: 2px;
                        margin: 0;
                        text-align: center;
                        width: 50px;
                    }
                }
            }
        }
    }
}
</style>