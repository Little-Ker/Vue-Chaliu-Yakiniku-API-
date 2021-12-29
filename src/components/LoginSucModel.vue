<template>
    <div v-if="isShowLoginNotice" class="loginSucModel d-flex justify-content-center align-items-center">
        <transition @after-enter='afterEnterFn' name='fadeIn' appear>
            <div class="model">
                <p class="icon-ok-circled text-align-center"></p>
                <p class="title fw-700 text-align-center">登入成功！</p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    computed: {
        isShowLoginNotice() {
            return this.$store.state.isShowLoginNotice;
        }
    },
    methods: {
        afterEnterFn() {
            this.$store.dispatch('updateIsShowLoginNotice', false);
        }
    } 
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.loginSucModel {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    z-index: 100;
    .model {
        position: relative;
        padding: 65px 75px;
        border-radius: 0.3rem;
        background-color: #fff;
        .icon-ok-circled {
            font-size: 64px;
            margin-bottom: 32px;
            color: $main-blue-text;
        }
        .title {
            color: $main-light-blue-text;
            font-size: 24px;
        }
    }
}

/* 提示框進出場動畫 */
.fadeIn-enter-active {
  animation: fadeIn 2s;
}
</style>