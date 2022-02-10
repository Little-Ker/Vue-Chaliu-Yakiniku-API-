<template>
    <div class="newsList">
        <router-link :to="`/new/${news.id}`" class="new d-flex" v-for="(news, index) in showSomeNewsAry" :key="index">
            <div class="imgScale">
                <div class="img bg-fit" :style="{backgroundImage:'url('+news.img+')'}"></div>  
            </div>
            <div class="txt d-flex justify-content-center flex-direction-col">
                <p class="title main-brow-text fw-700">{{news.title}}</p>
                <p class="date fw-700 main-white-text">{{news.date}} | {{news.type}}</p>
                <p class="type fw-700"></p>
            </div>
            <div class="moreBtn fw-700">
                <p>View More</p>
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path class="rect-arrow" d="M41.9,32.3c0.1-0.2,0.1-0.4,0-0.6c0-0.1-0.1-0.2-0.2-0.3l0,0l-5-5c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l3.8,3.8H22.8
                        c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h16.7l-3.8,3.8c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l5-5
                        l0,0C41.9,32.5,41.9,32.4,41.9,32.3z">
                    </path>
                    <polyline class="rect-line" fill="none" stroke-width="1" stroke-miterlimit="10" points="0,12 0,0 64,0 64,64 0,64 0,52 "></polyline>
                    <polyline class="rect-line--bg" fill="none" stroke-width="1" stroke-miterlimit="10" points="0,12 0,0 64,0 64,64 0,64 0,52 "></polyline>
                </svg>
            </div>
        </router-link>
  </div>
</template>

<script>
import newsListData from '@/assets/datas/newsListData.json';

export default {
    name: 'newsList',
    props:['chooseType', 'nowPageNum'],
    data() {
        return {
            newsListData: newsListData.news,
        }
    },
    computed: {
        newsListAry() {
            if (this.chooseType === '全部公告') return this.newsListData;
            let newsAry = [];
            this.newsListData.forEach(news => {
                const newType = news.type;
                if (newType === this.chooseType) newsAry.push(news);
            });
            return newsAry;
        },
        showSomeNewsAry() {
            const showOnceCount = 5;
            const startNewsIndex = (showOnceCount * (this.nowPageNum - 1) < 0) ? 0 : showOnceCount * (this.nowPageNum - 1);
            const endNewsIndex = ((showOnceCount * this.nowPageNum) >= this.newsListAry.length) ? (this.newsListAry.length) : (showOnceCount * this.nowPageNum);
            const dataAry = this.newsListAry.slice(startNewsIndex, endNewsIndex);
            return dataAry;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.newsList {
    .new {
        height: 180px;
        position: relative;
        transition: .3s all;
        align-items: center;
        background: rgba(255, 255, 255, 0.05);
        margin: 35px 0;
        cursor: pointer;
        .imgScale {
            overflow: hidden;
            min-width: 250px;
            height: 100%;
        }
        .img { 
            transition: 1s cubic-bezier(.165,.84,.44,1);
        }
        .txt {
            margin-left: 50px;
            .title {
                font-size: 22px;
            }
            .date {
                margin: 10px 0;
            }
            .type {
                margin-top: 15px;
                background-color: #c7994f;
                width: 35px;
                height: 2px;
            }
        }
        .moreBtn {
            position: absolute;
            right: 50px;
            color: $main-white-text;
            p {
                position: absolute;
                width: 100px;
                left: -90px;
                top: calc((100% - 22px)/ 2);
            }
            .rect-arrow {
                transition: all .3s;
                fill: $main-white-text;
            }
            .rect-line--bg {
                stroke: $main-white-opcity-text;
            }
            .rect-line {
                stroke: $main-white-text;
                stroke-dasharray: 256;
                stroke-dashoffset: 256;
                transition: all .6s cubic-bezier(0,0,.26,1) 0s;
            }
        }
        &:hover {
            .img {
                transform: scale(1.1);
            }
            .rect-line {
                stroke-dashoffset: 0;
            }
            .rect-arrow {
                transform: translateX(8px);
            }
        }
    }
}
</style>

