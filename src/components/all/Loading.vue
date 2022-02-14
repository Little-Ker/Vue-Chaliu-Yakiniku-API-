<template>
    <div v-if="isShowLoading" class="loading">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: 'loading',
    computed: {
        isShowLoading() {
            return this.$store.state.isShowLoading;
        },
    },
    methods: {
        createRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        // 禁用滾動條
        stopScrollBar() {
            var tops = $(document).scrollTop();
            $(document).bind("scroll",function (){$(document).scrollTop(tops); });
        },
        startScrollBar() {
            $(document).unbind("scroll");
        }
    },
    watch: {
        isShowLoading() {
            console.log(111,this.isShowLoading);
            if (!this.isShowLoading) return;
            this.stopScrollBar();
            let randomSec = this.createRandom(300, 1000)
            this.timeout = setTimeout(() => {
                this.startScrollBar();
                this.$store.dispatch('updateIsShowLoading', false);
                clearTimeout(this.timeout);
            }, randomSec);
        }
    }
}
</script>

<style lang="scss" scoped>
span:nth-child(1) {
    animation: loadingAnim 1.5s 0.13s ease-out infinite
}
span:nth-child(2) {
    animation: loadingAnim 1.5s 0.26s ease-out infinite
}
span:nth-child(3) {
    animation: loadingAnim 1.5s 0.39s ease-out infinite
}

.loading {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #aa8243;
        margin: 0px 15px;
    }
}
</style>