<template>
    <div class="foodList container-1100">
        <div class="typeMenu d-flex justify-content-center">
            <a v-for='(type, index) in typeListAry' :key='index'>
                <input v-model="selectType" :id="`type0${index}`" type="radio" name='newsType' :value="type">
                <label :for="`type0${index}`" class="typeStyle">{{type}}</label>  
            </a>
        </div>
        <div class="allFood d-flex">
            <div v-for="(food, index) in showTypeFoodAry" :key="index" class="food d-flex">
                <div class="img bg-fit" :style="{backgroundImage:'url('+food.img+')'}">
                    <div class="blackHide main-white-text fw-700 d-flex justify-content-center align-items-center"><p>NT.{{food.price}}</p></div>
                </div>
                <div class="food-block align-self-center">
                    <p class="txt main-brow-text fw-700">{{food.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import foodListData from '@/assets/datas/foodListData.json';

export default {
    name: 'foodList',
    data() {
        return {
            foodListData: foodListData.food,
            selectType: '所有單點',
        }
    },
    computed: {
        typeListAry() {
            let typeAry = ['所有單點'];
            this.foodListData.forEach(food => {
                if (typeAry.indexOf(food.type) === -1) typeAry.push(food.type);
            });
            return typeAry;
        },
        showTypeFoodAry() {
            if (this.selectType === '所有單點') return this.foodListData;
            return this.foodListData.filter((food) => {
                return food.type === this.selectType;
            });
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.foodList {
    &.container-1100 {
        padding: 0;
    }
    .typeMenu {
        margin: 60px 0;
        input:checked + label, input:hover + label {
            color:$main-blue-text;
            background-color: $main-white-text;
        }
        input {
            display: none;
        }
        .typeStyle {
            cursor: pointer;
            text-align: center;
            color: $main-white-555;
            border: 1px solid $main-white-555;
            padding: 17px 20px;
            transition: .3s all;
            font-weight: 700;
            margin: 0 15px;
            &:first-child {
                margin-left: 0;
            }
        }
    }
    .allFood {
        flex-wrap: wrap;
        .food {
            height: 150px;
            width: calc((100% - 50px) / 3);
            margin: 0 15px 40px 0;
            .img {
                width: 180px;
                .blackHide {
                    font-size: 18px;
                    background-color: rgba(0, 0, 0, 0.7);
                    opacity: 0;
                    transition: .3s;
                    position: relative;
                    &::before {
                        content: '';
                        position: absolute;
                        width: 90%;
                        height: 90%;
                        top: 5%;
                        left: 5%;
                        border: 2px solid #999;
                    }
                }
            }
            .food-block {
                margin-left: 20px;
                .txt {
                    position: relative;
                    font-size: 20px;
                    letter-spacing: 2px;
                    padding-bottom: 15px;
                    margin-bottom: 35px;
                    &::before {
                        content: '';
                        width: 22px;
                        height: 3px;
                        background-color: #ccc;
                        position: absolute;
                        bottom: 0;
                        left: 3px;
                    }
                }
            }
            &:hover {
                .img .blackHide {
                    opacity: 1;
                }
            }
        }
    }
}
</style>

