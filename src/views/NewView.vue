<template>
    <div class="newView main-bg-img main-white-text">
        <div class="container-920">
            <div class="top">
                <p class="main-white-999 fw-700 text-right">{{newData(id).type}}</p>
                <p class="main-brow-text title fw-700">{{newData(id).title}}</p>
                <div class="d-flex justify-content-between">
                    <p class="fw-700 main-white-999">{{newData(id).date}}</p>
                    <div class="d-flex align-items-center">
                        <p class="share fw-700 main-white-999">SHARE</p>
                        <a :href="`http://line.naver.jp/R/msg/text/?${shareUrl}`" class="icon icon-line"></a>
                        <a :href="`https://www.facebook.com/sharer.php?u=${shareUrl}`" target="_blank" class="icon icon-facebook"></a>
                    </div>
                </div>
            </div>
            <div class="article">
                <p v-for="(txt, index) in articleAry" :key="index">{{txt}}</p>
                <img :src="newData(id).img" alt="茶六">
            </div>
            <div class="bottom d-flex justify-content-between align-items-center">
                <router-link :to="`/new/${prevId}`" @click="goTop()" class="prev-btn d-flex align-items-center fw-700">
                    <p class="icon-left-open  main-brow-text"></p>
                    <p class="txt main-brow-text">PREV</p>
                    <p class="content text-left">{{nextNewTitle(prevId)}}</p>
                </router-link>
                <router-link to="/news" @click="goTop()" class="btn-border align-self-end">
                    <span class="btn-border-text fw-700 transition-0-3">返回列表</span>
                </router-link>
                <router-link :to="`/new/${nextId}`" @click="goTop()" class="next-btn d-flex align-items-center fw-700">
                    <p class="content text-right">{{nextNewTitle(nextId)}}</p>
                    <p class="txt main-brow-text">NEXT</p>
                    <p class="icon-right-open main-brow-text"></p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import newsListData from '@/assets/datas/newsListData.json';

export default {
    name: 'newsView',
    data() {
        return {
            newsListData: newsListData.news,
            id: 0,
            prevId: 0,
            nextId: 0,
        }
    },
    computed: {
        shareUrl() {
            const url = `https://little-ker.github.io/Vue-Chaliu-Yakinikuy/#/new/${this.id}`;
            return url;
        },
        newData() {
            return function(id) {
                return this.newsListData[id];
            }
        },
        articleAry() {
            return this.newData(this.id).txt;
        },
        newsLength() {
            return this.newsListData.length;
        },
        nextNewId() {
            return function(num) {
                let newId = this.id + num;
                if (newId < 0) newId = this.newsLength - 1;
                if (newId >= this.newsLength) newId = 0;
                return newId;
            }
        },
        nextNewTitle() {
            return function(num) {
                return this.newData(num).title;
            }
        }
    },
    methods: {
        goTop() {
            $('html,body').scrollTop(0, 0);
        },
        resetId() {
            this.id = parseInt(this.$route.params.id);
            this.prevId = this.nextNewId(-1);
            this.nextId = this.nextNewId(1);
        },
    },
    mounted() {
        this.resetId();
        this.goTop();
    },
    watch: {
        $route(now) {
            // console.log(now);
            this.resetId();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.newView {
    padding-top: 140px;
    p {
        font-family: "Courier New", Courier, monospace;
    }
    .top {
        position: relative;
        padding-bottom: 20px;
        border-bottom: 1px solid $main-white-999;
        .title {
            font-size: 28px;
            margin: 7px 0;
            line-height: 36px;
        }
        .share {
            position: relative;
            width: 60px;
            letter-spacing: 2px;
            margin-right: 70px;
            padding: 5px;
            &::before {
                content: '';
                position: absolute;
                right: -105%;
                top: 45%;
                width: 50px;
                height: 1px;
                background-color: #aaa;
            }
        }
        .icon {
            margin: 0 6px;
            font-size: 22px;
            color: $main-white-999;
            transition: .3s all;
            &:hover {
                color: $main-white-text;
            }
        }
    }
    .article {
        padding: 30px 0 40px 0;
        border-bottom: 1px solid $main-white-999;
        p {
            line-height: 30px;
            margin-bottom: 5px;
        }
        img {
            width: 100%;
            max-width: 460px;
            margin: 5px 0;
        }
    }
    .bottom {
        padding-top: 60px;
        .prev-btn, .next-btn {
            color: $main-white-text;
            .txt {
                margin: 0 10px;
            }
            .content {
                width: 180px;
                line-height: 1.8;
                margin: 0 10px;
            }
            .icon-left-open, .icon-right-open, .content {
                transition: .3s all;
            }
            &:hover .content {
                color: $main-brow-text;
            }
        }
        .prev-btn:hover .icon-left-open {
            transform: translateX(-10px);
        }
        .next-btn:hover .icon-right-open {
            transform: translateX(10px);
        }
        .btn-border {
            margin: 0;
            margin-bottom: 5px;
        }
    }
}
</style>
