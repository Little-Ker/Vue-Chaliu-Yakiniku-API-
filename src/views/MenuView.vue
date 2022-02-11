<template>
    <div class="menuView main-bg-img">
        <div class="container-1440">
            <div class="title">
                <h1 class="text-center main-brow-text">經典套餐</h1>
                <p class="text-center main-brow-text">Set Meal</p>
            </div>
            <MealSwiper/>
            <div class="food">
               <div class="title">
                    <h1 class="text-center main-brow-text">精選單點</h1>
                    <p class="text-center main-brow-text">A La Carte</p>
                </div>
                <FoodList/> 
            </div>
        </div>
    </div>
</template>

<script>
import MealSwiper from '@/components/food/MealSwiper.vue';
import FoodList from '@/components/food/FoodList.vue';

export default {
    name: 'menuView',
    components: {
        MealSwiper,
        FoodList
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.menuView {
    padding: 140px 0 0 0;
    .food {
        margin-top: 110px;
    }
}
</style>

