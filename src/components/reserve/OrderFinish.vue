<template>
    <div class="orderFinish">
        <div class="container-620 w-100">
            <div class="icon-ok-circled main-white-text text-align-center"></div>
            <p class="main-white-text text-align-center">您的預約已完成！</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'orderFinish',
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.orderFinish {
    .icon-ok-circled {
        font-size: 150px;
        opacity: .5;
        margin: 40px 0 30px 0;
    }
    p {
        font-size: 22px;
        letter-spacing: 3px;
    }
}
</style>
