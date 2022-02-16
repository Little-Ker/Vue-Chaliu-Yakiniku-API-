<template>
    <div class="memberView" :style="{backgroundImage:'url('+bg+')'}">
        <div class="container-920 d-flex">
            <div class="choose d-flex flex-direction-col">
                <div class="top">
                    <p class="fw-700">你好！<br>{{memberName}}</p>
                </div>
                <div class="bottom">
                    <router-link to="/member/reserve" @click="goTop" class="link icon-article-alt">預約紀錄</router-link>
                    <router-link to="/member/information" @click="goTop" class="link icon-lock">帳戶資料</router-link>
                    <router-link to="/member/edit" @click="goTop" class="link icon-pencil">更改密碼</router-link>
                    <a @click="loginOut" class="link icon-ccw">登出</a>
                </div>
            </div>
            <div class="message">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Member',
    data() {
        return {
            bg: require('@/assets/images/all/bg02.png'),
        }
    },
    computed: {
        memberName() {
            return this.$store.state.memberName;
        }
    },
    methods: {
        loginOut() {
            this.$store.dispatch('updateIsShowCheckNotice', true);
        },
        goTop() {
            $('html,body').scrollTop(0, 0);
        },
    },
    beforeCreate() {
        $('.nav').addClass('blackNav');
        $('.footer').addClass('removePadding');
        $('.navBottom').addClass('no-display');
    },
    beforeUnmount() {
        $('.nav').removeClass('blackNav');
        $('.footer').removeClass('removePadding');
        $('.navBottom').removeClass('no-display');
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";
.memberView {
    padding-top: 140px;
    padding-bottom: 100px;
    .container-1440 {
        padding: 0 70px;
    }
    .choose, .message {
        background-color: rgba(255, 255, 255, 0.7);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .choose {
        height: 355px;
        width: 20%;
        margin-right: 50px;
        padding: 10px 20px;
        align-items: center;
        .top {
            padding: 30px 20px;
            p {
                line-height: 25px;
            }
        }
        .bottom {
            border-top: 1px solid #DCDCDC;
            padding: 10px;
            .link {
                cursor: pointer;
                color: $main-blue-text;
                transition: .3s all;
                margin: 20px 0;
                padding: 5px;
                font-weight: 700;
                &::before {
                    margin-right: 10px;
                }
                &:hover, &.router-link-active {
                    color: $main-brow-text; 
                }
            }
        }
    }
    .message {
        padding: 60px 80px;
        width: 80%;
    }
}
</style>
