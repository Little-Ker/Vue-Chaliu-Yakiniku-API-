<template>
    <div class="reserve main-margin-top">
        <div class="reserve-bg bg-fit" :style="{backgroundImage:'url('+reserveBg+')'}">
            <div class="reserve-block blackHide">
                <div class="container-1440 d-flex flex-direction-col">
                    <div class="align-self-center text-center">
                        <div class="title">
                            <h1 class="main-brow-text">預約方式</h1>
                            <p class="main-brow-text">Reserve</p>
                        </div>
                        <p class="txt main-white-text">{{reserveTxt}}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <a href="#" class="d-block d-flex flex-direction-col align-items-center reserve-item" v-for="(item, index) in reserveList" :key="index">
                            <span class="d-block transition-0-3 item-img text-align-center" :class="item.iconClass"></span>
                            <span class="d-flex flex-direction-col">
                                <span class="d-block">
                                    <span class="d-inline-block transition-0-3 text-align-center item-title fw-700">{{item.title}}</span>
                                    <span class="d-inline-block icon-right-open transition-0-3"></span>
                                </span>
                                <span class="d-block item-txt">{{item.txt}}</span>
                            </span>
                        </a>
                    </div>
                    <div class="moreBtn align-self-center">
                        <a class="btn-border"> 
                            <span class="btn-border-text fw-700 transition-0-3">前往分店資訊</span>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reserveBg: require('@/assets/images/index/index-reserve-bg.jpg'),
            reserveTxt: '以下訂位方式，訂位完成後皆會收到訂位確認簡訊，需收到訂位確認簡訊才算訂位成功',
            reserveList: [
                {
                    title:'線上預訂',
                    iconClass: 'icon-mobile',
                    txt: '不開放當天線上預約，6人以上訂位，請來電進行訂位'
                },
                {
                    title:'電話訂位',
                    iconClass: 'icon-phone',
                    txt: '訂位電話服務時段，早上09:30 - 凌晨01:00'
                },
                {
                    title:'到店現場訂位',
                    iconClass: 'icon-user',
                    txt: '現場訂位服務時段，早上11:00 - 凌晨01:00'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.reserve {
    .blackHide {
        background-color: rgba(8,10,15, 0.8);
    }
    .reserve-bg {
        width: 100%;
        background-attachment: fixed;
        position: relative;
    }
    .title {
        margin-bottom: 15px;
    }
    .txt {
        margin-bottom: 80px;
        line-height: 22px;
    }
    .reserve-block {
        padding: 90px 50px 80px;
        .reserve-item {
            text-decoration: none;
            width: 33.33%;
            margin: auto;
            text-align: center;
            padding: 0 40px;
            position: relative;
            &::before {
                content: '';
                width: 1px;
                height: 90%;
                background-color: $main-brow-text;
                position: absolute;
                left: 0;
                top: 5%;
            }
            &:nth-child(1)::before {
                width: 0;
            }
            .item-img {
                width: 100px;
                height: 100px;
                background-color: rgba(255, 255, 255, 0.85);
                border-radius: 50%;
                color: $main-brow-text;
                font-size: 54px;
                line-height: 95px;
            }
            .item-title {
                font-size: 20px;
                color: $main-white-text;
                margin-top: 20px;
                margin-bottom: 20px;
                letter-spacing: 2px;
                text-shadow: 0.1em 0.1em 0.2em black
            }
            .item-txt {
                color: $main-white-text;
                line-height: 26px;
                letter-spacing: 1px;
                position: relative;
                max-width: 280px;
                text-shadow: 0.1em 0.1em 0.2em black
            }
            .icon-right-open {
                color: $main-white-text;
                position: relative;
                left: 0;
                top: -1px;
            }
            &:hover{
                .item-img {
                    font-size: 64px;
                }
                .item-title {
                    color: $main-brow-text;
                }
                .icon-right-open {
                    color: $main-brow-text;
                    left: 10px;
                }
            }
        }
    }
    .moreBtn {
        margin-top: 70px;
        .btn-border {
            width: 200px;
            height: 48px;
            margin-left: 40px;
            margin-right: 40px;
        }
    }
}
</style>