<template>
    <div class="orderFalse">
        <div class="container-620 w-100">
            <div class="icon-cancel-circled main-white-text text-align-center"></div>
            <p class="main-white-text text-align-center title">目前已有預約中紀錄！</p>
            <p class="main-white-opcity-text text-align-center">如需修改預約資訊，請先取消當前預約或聯絡服務人員</p>
        </div>
        <div class="d-flex justify-content-center">
            <router-link to="/member/reserve" @click="goTop()" class="btn-border">
                <span class="btn-border-text fw-700 transition-0-3">前往預約紀錄</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'orderFalse',
    methods: {
        goTop() {
            $('html,body').scrollTop(0, 0);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.orderFalse {
    .icon-cancel-circled {
        font-size: 150px;
        opacity: .5;
        margin: 40px 0 30px 0;
    }
    .title {
        font-size: 22px;
        letter-spacing: 3px;
        margin-bottom: 15px;
    }
    .main-white-opcity-text {
        color: rgba(255, 255, 255, 0.4);
    }
    .btn-border {
        width: 220px;
        height: 55px;
        margin: 0;
        margin-top: 50px;
        letter-spacing: 1px;
    }
}
</style>
