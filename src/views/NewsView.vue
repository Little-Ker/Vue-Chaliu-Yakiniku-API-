<template>
    <div class="newsView main-bg-img">
        <div class="container-1100">
            <div class="title dataPadding d-flex justify-content-center flex-direction-col">
                <h1 class="text-center main-brow-text">活動新訊</h1>
                <p class="text-center main-brow-text">News</p>
            </div>
            <TypeMenu @chooseType="getType"></TypeMenu>
            <NewsList :nowPageNum="nowPageNum" :chooseType="chooseType"></NewsList>
            <Pagination  @nowPageNum="getPageNum" :chooseType="chooseType"></Pagination>     
        </div>
    </div>
</template>

<script>
import TypeMenu from '@/components/news/TypeMenu.vue';
import NewsList from '@/components/news/NewsList.vue';
import Pagination from '@/components/news/Pagination.vue';

export default {
    name: 'newsView',
    components: {
        TypeMenu,
        NewsList,
        Pagination
    },
    data() {
        return {
            chooseType: '',
            nowPageNum: '',
        }
    },
    methods: {
        getType(setTypeVal) {
            this.chooseType = setTypeVal;
        },
        getPageNum(setPageNumVal) {
            this.nowPageNum = setPageNumVal;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.newsView {
    padding: 140px 0 60px 0;
    .title {
        h1 {
            font-size: 42px;
        }
        p {
            font-size: 22px;
        }
    }
}
</style>

