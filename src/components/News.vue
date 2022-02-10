<template>
<div class="news container-1440 main-margin-top main-padding-bottom pos-relative">
    <div class="title main-brow-text">
        <h1>活動新訊</h1>
        <p>News</p>
    </div>
    <div class="d-flex justify-content-bewteen">
        <div class="moreBtn align-self-end">
            <router-link to="/news" class="btn-border">
                <span class="btn-border-text fw-700 transition-0-3">更多消息</span>
            </router-link>
        </div>
        <div class="list pos-relative title-margin-top">
            <swiper
                :options="swiperOption"
                :breakpoints="swiperOption.breakpoints"
                :loop="swiperOption.loop"
                :autoplay="swiperOption.autoplay"
                :slides-per-view="swiperOption.slidesPerView"
                :space-between="swiperOption.spaceBetween"
                :speed="swiperOption.speed"
                @swiper="onSwiper"
            >
                <swiper-slide v-for="(num, index) in 5" :key="index">
                    <router-link :to="`/new/${newsData(num).id}`" class="new">
                        <div>
                            <p class="d-block date text-align-right fw-700 font-CourierNew main-blue-text">{{newsData(num).date}}</p>
                            <img :src="newsData(num).img" class="img-fit" alt="圖片">
                            <p class="title line1 fw-700 main-brow-text">{{newsData(num).title}}</p>
                            <p class="txt main-white-text line3">
                                <span v-for="(txt, index) in articleAry(num)" :key="index">{{txt}}</span>
                            </p>
                        </div>
                        <div class=" fw-700 main-white-text font-CourierNew">
                            <a class="btn-arrow justify-content-between">
                                <span class="arrow"></span>
                                <span class="btn-arrow-text text-align-left main-gray-text fw-700 transition-0-3">View More</span>
                            </a>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
            <div @click="prevFn" class="swiper-button swiper-prev-btn">
                <i class="icon-arrow icon-left-open main-white-opcity-text transition-0-3"></i>
            </div>
            <div @click="nextFn" class="swiper-button swiper-next-btn">
                <i class="icon-arrow icon-right-open main-white-opcity-text transition-0-3"></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import newsListData from '@/assets/datas/newsListData.json';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css'
 
export default {
    data() {
        return {
            newsListData: newsListData.news,
            swiper: null,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 80,
                navigation: {
                    nextEl: ".swiper-next-btn",
                    prevEl: ".swiper-prev-btn",
                },
                loop: true,
                autoplay: false,
                speed: 800,
                breakpoints: {
                    // 1: {
                    //     slidesPerView: 2,
                    //     spaceBetween: 10,
                    // },
                    // 992: {
                    //     slidesPerView: 4,
                    //     spaceBetween: 20,
                    // },
                }
            },
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        newsData() {
            return function(num) {
                return this.newsListData[num];
            }
        },
        articleAry() {
            return function(num) {
                return this.newsData(num).txt;
            }
        }
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
        },
        prevFn() {
            this.swiper.slidePrev();
        },
        nextFn() {
            this.swiper.slideNext();
        },
    },
  };
</script>
 
<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.news {
    .container-1440 {
        padding: 0 40px;
    }
    .list {
        width: 80%;
        padding: 0 50px;
    }
    .swiper-button {
        cursor: pointer;
        position: absolute;
        top: 45%;
        font-size: 24px;
        z-index: 2;
        &.swiper-next-btn {
            right: -10px;            
        }
        &.swiper-prev-btn {
            left: -10px;
        }
        &:hover .icon-arrow {
            color: $main-white-text;
        }
    }
    .btn-border {
        margin-left: 0;
    }
    .swiper-slide {
        height: 420px;
        .new {
            cursor: pointer;
            height: 100%;
            .date {
                font-size: 20px;
                letter-spacing: 2px;
            }
            img {
                height: 200px;
                margin: 10px 0;
                -webkit-filter:grayscale(0.8);
                transition: .5s all;
            }
            .title {
                margin: 10px 0;
                line-height: 1.4;
                font-size: 18px;         
            }
            .txt {
                line-height: 1.8;
                margin-bottom: 23px;
            }
            .btn-arrow {
                padding: 0;
                .btn-arrow-text {
                    position: relative;
                    opacity: 0;
                    right: 10px;
                }
                .arrow {
                    margin-right: 40px;
                    width: 20%;
                    position: relative;
                    left: 0;
                }
            }
            &:hover {
                .btn-arrow-text {
                    color: #EBEAEA;
                    opacity: 1;
                    right: 3px;
                }
                .arrow {
                    width: 30%;
                }
                img {
                    -webkit-filter:grayscale(0);
                }
            }
        }
    }
}
</style>
