<template>
    <div class="creatOrder">
        <form action="reserve-form" class="container-620 w-100 reserve-form">
            <div class="d-flex form-group">
                <p class="main-white-text select-title">分店選擇</p>
                <div class="shop-custom-select w-100" tabindex="0" @blur="isOpenShopSelect = false">
                    <div class="selected icon-right-open fw-700" @click="isOpenShopSelect = !isOpenShopSelect" >{{ selectShop }}</div>
                    <div class="items" :class="{selectHide: !isOpenShopSelect}">
                        <div class="item fw-700 d-flex" @click="clickShopSelect(shop)" :class="{'selectPick':selectSameOption(selectShop, shop.shopName)}" v-for="(shop, i) in shopPointData" :key="i">
                            {{ shop.shopName }}
                        </div>
                    </div>
                </div>
            </div>
            <p class="main-brow-text shopData icon-location fw-700">地址<span class="address">{{shopAddress(selectShop)}}</span></p>
            <p class="main-brow-text shopData icon-phone fw-700">電話<span class="address">{{shopPhone(selectShop)}}</span></p>
            <div class="d-flex form-group">
                <p class="main-white-text select-title select-title-bg2">人數選擇（六位以上請來電訂位）</p>
                <div class="shop-custom-select w-100" tabindex="0" @blur="isOpenPeopleSelect = false">
                    <div class="selected icon-right-open fw-700" @click="isOpenPeopleSelect = !isOpenPeopleSelect" >{{ selectPeople }}位</div>
                    <div class="items" :class="{selectHide: !isOpenPeopleSelect}">
                        <div class="item fw-700 d-flex" @click="clickPeopleSelect(people)" :class="{'selectPick':selectSameOption(selectPeople, people)}" v-for="(people, i) in 6" :key="i">
                            {{ people }}位
                        </div>
                    </div>
                </div>
            </div>
            <div @click="showCalendar()" class="d-flex form-group">
                <p class="main-white-text select-title select-title-bg2">用餐日期</p>
                <p class="main-white-text fw-700 chooseDate">{{chooseDate}}</p>
                <p class="icon-calendar main-white-text"></p>
            </div>
            <div class="custom-calendar">
                <Calendar :businessTime="getBusinessTime" @chooseDate="getChooseDate"></Calendar>
            </div>
            <div class="d-flex form-group">
                <p class="main-white-text select-title select-title-bg2">用餐時段</p>
                <p class="main-white-text fw-700 chooseDate">{{chooseTime.period}} {{chooseTime.time}}</p>
                <p class="icon-stopwatch main-white-text"></p>
            </div>
            <div class="custom-time">
                <Time :businessTime="getBusinessTime" @chooseTime="getChooseTime"></Time>
            </div>
            <a @click="nextStepFn()" class="btn-border align-self-end">
                <span class="btn-border-text fw-700 transition-0-3">下一步</span>
            </a>
        </form>
    </div>
</template>

<script>
import Calendar from '@/components/reserve/Calendar.vue';
import Time from '@/components/reserve/Time.vue';
import shopPointData from '@/assets/datas/shopPointData.json';

export default {
    name: 'ReserveView',
    data() {
        return {
            shopPointData: shopPointData.shop,
            isOpenShopSelect: false,
            isOpenPeopleSelect: false,
            chooseDateData: '',
            selectShop: shopPointData.shop[0].shopName,
            selectPeople: 1,
            chooseDate: '',
            chooseTime: '',
        }
    },
    computed: {
        isLoginSuccess() {
            return this.$store.state.isLoginSuccess;
        },
        getBusinessTime() {
            const businessTime = {
                open: 11,
                close: 21
            };
            return businessTime;
        },
        selectSameOption() {
            return function(selectShopName, shopName) {
                return selectShopName === shopName;
            }
        },
        shopAddress() {
            const vm = this;
            return function (shopName) {
                let address = '';
                vm.shopPointData.forEach(shop => {
                    if(shopName === shop.shopName) {
                        address = shop.address;
                    }
                });
                return address;
            }
        },
        shopPhone() {
            const vm = this;
            return function (shopName) {
                let phone = '';
                vm.shopPointData.forEach(shop => {
                    if(shopName === shop.shopName) {
                        phone = shop.phone;
                    }
                });
                return phone;
            }
        }
    },
    methods: {
        getChooseDate(chooseDayVal, setChooseDayVal) {
            this.chooseDate = setChooseDayVal;
            this.chooseDateData = chooseDayVal;
        },
        getChooseTime(setChooseTimeVal) {
            this.chooseTime = setChooseTimeVal;
        },
        getNowTime() {
            const newTime = new Date().getHours();
            this.$store.dispatch('updateNowTime', newTime);
        },
        clickShopSelect(shop) {
            this.selectShop = shop.shopName;
            this.isOpenShopSelect = false;
        },
        clickPeopleSelect(people) {
            this.selectPeople = people;
            this.isOpenPeopleSelect = false;
        },
        showCalendar() {
            $( ".custom-calendar" ).slideToggle("slow");
        },
        nextStepFn() {
            const orderMessage = {
                shop: this.selectShop,
                people: this.selectPeople,
                dateData: this.chooseDateData,
                date: this.chooseDate,
                time: this.chooseTime,
            };
            this.$store.dispatch('updateOrderMessage', orderMessage);
            if (!this.isLoginSuccess) {
                return this.$store.dispatch('updateIsShowLogin', true);
            }
            this.$store.dispatch('updateOrderLevel', 2);
            this.goTop();
        },
        goTop() {
            $('html,body').scrollTop(0, 0);
        },
    },
    created() {
        this.getNowTime();
    },
    components: {
        Calendar,
        Time,
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.creatOrder {
    .reserve-form {
        display: flex;
        flex-direction: column;
        .form-group {
            cursor: pointer;
            margin: 30px 0 10px 0;
            position: relative;
            border: 1px solid #fff;
            padding: 8px 0 0 0;
            .select-title {
                font-size: 18px;
                margin-top: 8px;
                margin-right: 30px;
                letter-spacing: 3px;
                padding: 0 10px;
                position: absolute;
                top: -20px;
                left: 20px;
                background-color: rgb(44,38,38);
                border-radius: 50%;
            }
            .select-title-bg2 {
                background-color: #18110E;
            }
        }
        .custom-calendar {
            margin-top: 30px;
            display: none;
        }
        .shopData {
            margin: 5px 0 0 30px;
            .address {
                margin-left: 10px;
            }
        }
        .chooseDate {
            line-height: 50px;
            font-size: 18px;
            margin-left: 30px;
        }
        .icon-calendar, .icon-stopwatch {
            position: absolute;
            right: 10px;
            font-size: 24px;
            top: 31%;
        }
        .shop-custom-select {
            font-size: 18px;
            position: relative;
            width: 240px;
            line-height: 43px;
            letter-spacing: 2px;
            &.date-custom-select {
                width: 160px;
            }
            .selected {
                color: #fff;
                padding-left: 30px;
                padding: 3px 0 3px 30px;
                cursor: pointer;
                &::before {
                    font-size: 17px;
                    position: absolute;
                    right: 12px;
                    top: 33%;
                    right: 15px;
                    transform: rotate(90deg);
                }
            }
            .items {
                z-index: 11;
                background-color: #fff;
                border-top: 0;
                position: absolute;
                box-shadow: rgb(0 0 0 / 10%) 0px 8px 10px;
                overflow: hidden;
                left: 0;
                right: 0;
                margin-left: -2px;
                margin-right: -2px;
                z-index: 2;
                &.selectHide {
                    display: none;
                }
                .item {
                    color: #858586;
                    padding-top: 3px;
                    padding-right: 10px;
                    justify-content: center;
                    cursor: pointer;
                    &:hover, &.selectPick{
                        background-color: $main-brow-text;
                        color: #fff;
                    }
                }
            }
        }
        .btn-border {
            width: 240px;
            height: 55px;
            margin: 0;
            margin-top: 40px;
            letter-spacing: 3px;
        }
    }
}
</style>
