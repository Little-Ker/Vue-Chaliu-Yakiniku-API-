<template>
    <div class="reserveView main-bg-img">
        <div class="banner bg-fit" :style="{backgroundImage:'url('+bannerImg+')'}">
            <div class="blackHide">
                <div class="title">
                    <h1 class="main-brow-text">線上訂位系統</h1>
                    <p class="main-brow-text">Reserve System</p>
                </div>
                <CreateOrder></CreateOrder>
            </div>
        </div>  
    </div>
</template>

<script>
import CreateOrder from '@/components/reserve/CreateOrder.vue';

export default {
    name: 'ReserveView',
    components: {
        CreateOrder,
    },
    data() {
        return {
            bannerImg: require('@/assets/images/reserve/banner.jpg'),
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.reserveView {
    position: relative;
    .banner {
        background-attachment: fixed;
        height: 100%;
        background-position-y: 43%;
        .blackHide {
            background-color: rgba(8, 10, 15, 0.8);
            padding: 140px 0;
            display: flex;
            flex-direction: column;
        }
        .title {
            align-self: center;
            margin-bottom: 30px;
            h1 {
                font-size: 32px;
            }
            p {
                position: relative;
                font-size: 16px;
                padding-top: 3px;
                padding-bottom: 30px;
                &::before {
                    content: '';
                    width: 30px;
                    height:1px;
                    background-color: #aa8243;
                    position: absolute;
                    left: calc((100% - 30px) / 2);
                    bottom: 0;
                }
            }
        }
    }
}
</style>
