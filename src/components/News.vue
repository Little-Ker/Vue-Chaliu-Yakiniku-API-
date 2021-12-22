<template>
<div class="news container-1440 main-margin-top main-padding-bottom pos-relative">
    <div class="title main-brow-text">
        <h1>活動新訊</h1>
        <p>News</p>
    </div>
    <div class="d-flex justify-content-bewteen">
        <div class="moreBtn align-self-end">
            <a class="btn-border">
                <span class="btn-border-text fw-700 transition-0-3">更多消息</span>
            </a>
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
                <swiper-slide v-for="(item, index) in newsList" :key="index">
                    <a class="new d-flex flex-direction-col justify-content-bewteen">
                        <div>
                            <p class="d-block date text-align-right fw-700 font-CourierNew main-blue-text">{{item.date}}</p>
                            <img :src="item.img" class="img-fit" alt="圖片">
                            <p class="title line1 fw-700 main-brow-text">{{item.title}}</p>
                            <p class="txt main-white-text line3">{{item.txt}}</p>
                        </div>
                        <div class=" fw-700 main-white-text font-CourierNew">
                            <a class="btn-arrow justify-content-between">
                                <span class="arrow"></span>
                                <span class="btn-arrow-text text-align-left main-gray-text fw-700 transition-0-3">View More</span>
                            </a>
                        </div>
                    </a>
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
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css'
 
export default {
    data() {
        return {
            newsList: [
                {
                    title: '新品單點上桌 - 極黑牛肋條',
                    date: '01.21,2021',
                    img: require('@/assets/images/index/news/01.jpg'),
                    txt: '肉質鮮嫩多汁，油花細緻不乾澀，絕對是身為資深饕客的您，必嘗鮮的美食之一。'
                },
                {
                    title: '防疫期間，防疫餐點享八折優惠',
                    date: '06.15,2021',
                    img: require('@/assets/images/index/news/02.jpg'),
                    txt: '開放『外帶自取』服務囉，三級防疫期間，外帶即享有『8折』優惠，疫情期間僅開放『當日』外送及外帶餐點預訂。'
                },
                {
                    title: '茶六中清店 - 正式營運',
                    date: '04.19,2021',
                    img: require('@/assets/images/index/news/03.jpg'),
                    txt: '各位久等了，茶六中清店將於4/24(六)正式開幕囉。'
                },
                {
                    title: '茶六朝富店，進行店內設備維護',
                    date: '03.31,2021',
                    img: require('@/assets/images/index/news/04.jpg'),
                    txt: '茶六朝富店進行店內設備維護，店休二日，如有造成不便，敬請見諒。'
                },
                {
                    title: '日本和牛雙人套餐 - 即將上市',
                    date: '01.14,2021',
                    img: require('@/assets/images/index/news/05.jpg'),
                    txt: '日本和牛肉質細緻柔嫩，擁有豐富大理石般的油花，炙烤完和牛香氣極其濃郁，入口即化的多汁與豐腴感，讓人口齒留香、意猶未盡。'
                }
            ],
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
