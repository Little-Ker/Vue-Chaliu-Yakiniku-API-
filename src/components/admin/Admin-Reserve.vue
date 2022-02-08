<template>
    <div class="member-reserve">
        <h1 class="title">會員訂位紀錄</h1>
        <div class="shopSelect d-flex justify-content-end align-items-center">
            <p class="selectTitle fw-700">分店</p>
            <div class="shop-custom-select" tabindex="0" @blur="isOpenShopSelect = false">
                <div class="selected icon-right-open fw-700" @click="isOpenShopSelect = !isOpenShopSelect" >{{ selectShop }}</div>
                <div class="items" :class="{selectHide: !isOpenShopSelect}">
                    <div class="item fw-700 d-flex" @click="clickShopSelect(shop)" :class="{'selectPick':selectSameOption(selectShop, shop.shopName)}" v-for="(shop, i) in shopPointData" :key="i">
                        {{ shop.shopName }}
                    </div>
                </div>
            </div>
            <p class="selectTitle fw-700">日期</p>
            <div class="shop-custom-select date-custom-select" tabindex="0" @blur="isOpenDateSelect = false">
                <div class="selected icon-right-open fw-700" @click="isOpenDateSelect = !isOpenDateSelect" >{{ selectDate }}</div>
                <div class="items" :class="{selectHide: !isOpenDateSelect}">
                    <div class="item fw-700 d-flex" @click="clickDateSelect(date)" :class="{'selectPick':selectSameOption(selectDate, date)}" v-for="(date, i) in ordersDate" :key="i">
                        {{ date }}
                    </div>
                </div>
            </div>
        </div>
        <div @click="goTop();" class="d-flex mb-3">
            <div v-for="(status, index) in statusObj" :key="index" @click="resetChoose(status,index);statusObj[index].statusBool = true;" :class="{'active': statusObj[index].statusBool}" class="choose">
                {{status.statusName}}
            </div>
        </div>
        <div v-for="(item, index) in orders" :key="index" class="order">
            <div @click="clickDeleteBtn" v-if="!statusObj.isShowNowOrder.statusBool" class="btn-close"></div>
            <div class="shop">
                <p class="name">茶六燒肉堂 - {{item.shopName}}</p>
            </div>
            <p class="fw-700 mb-1">
                <span :class="{'main-brow-text': statusObj.isShowNowOrder.statusBool}" class="icon-dot fs-20"></span>
                <span class="mr-2">訂位者:</span>
                <span>{{item.memberName}}</span>
            </p>
            <p class="fw-700 mb-1">
                <span :class="{'main-brow-text': statusObj.isShowNowOrder.statusBool}" class="icon-dot fs-20"></span>
                <span class="mr-2">手機號碼:</span>
                <span>{{item.cellphone}}</span>
            </p>
            <div class="fw-700 d-flex mb-1">
                <p class="mr-2">
                    <span :class="{'main-brow-text': statusObj.isShowNowOrder.statusBool}" class="icon-dot fs-20"></span>
                    <span></span>預定時間:
                </p>
                <p class="d-flex">
                    <span class="mr-2 d-block">{{item.date}}</span>
                    <span class="d-block">{{item.time}}</span>
                </p> 
            </div>
            <p class="fw-700 mb-1">
                <span :class="{'main-brow-text': statusObj.isShowNowOrder.statusBool}" class="icon-dot fs-20"></span>
                <span class="mr-2">預定人數:</span>
                <span>{{item.people}}人</span>
            </p>
            <div :class="[{'orderStatus': !statusObj.isShowNowOrder.statusBool}, {'mt-4': statusObj.isShowNowOrder.statusBool}]" class="d-flex justify-content-bewteen">
                <p v-if="!statusObj.isShowNowOrder.statusBool" class="align-self-end main-white-888">於 {{item.bookTime}} 預約</p>
                <div class="w-100 d-flex justify-content-end" v-if="statusObj.isShowNowOrder.statusBool">
                    <button class="borderBtn active">預約中</button>
                    <button @click="clickOverBtn" class="borderBtn">已用餐</button>
                    <button @click="clickCancelBtn" class="borderBtn">取消</button>
                </div>
                <p v-if="!statusObj.isShowNowOrder.statusBool" class="statusTxt fw-700">{{item.status}}</p>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div @click="goTopScroll" v-if="orders.length > 1" class="goTop transition-0-3 icon-left-open"></div>
        </div>
        <div v-if="orders.length === 0" class="noOrder">
            <p class="icon-calendar text-align-center"></p>
            <p class="txt fw-700 text-align-center">目前無任何紀錄</p>
        </div>
    </div>
</template>

<script>
import memberReseveData from '@/assets/datas/memberReserveData.json';
import shopPointData from '@/assets/datas/shopPointData.json';

export default {
    data() {
        return {
            memberReseveData : memberReseveData.reserves,
            shopPointData: shopPointData.shop,
            statusObj: {
                isShowNowOrder:{
                    statusName: '訂位中',
                    statusBool: true
                },
                isShowOverOrder: {
                    statusName: '已用餐',
                    statusBool: false
                },
                isShowCancelOrder: {
                    statusName: '已取消',
                    statusBool: false
                },
            },
            selectShop: shopPointData.shop[0].shopName,
            isOpenShopSelect: false,
            selectDate: '所有日期',
            isOpenDateSelect: false,
        }
    },
    computed: {
        orders() {
            const orderList = [];
            this.memberReseveData.forEach(order => {
                if (this.selectShop === order.shopName && (this.selectDate === '所有日期' || this.selectDate === order.date)) {
                    Object.keys(this.statusObj).forEach((status) => {
                        if (this.statusObj[status].statusBool && order.status === this.statusObj[status].statusName) {
                            orderList.push(order);
                        }
                    })
                }
            });
            // 日期時間升序
            orderList.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
            return orderList;
        },
        ordersDate() {
            // '日期時間降序'
            //     return this.orders.sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time));
            // '日期時間升序'
            // this.orders.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
            const dateAry = [];
            const allTxt = '所有日期';
            this.memberReseveData.forEach(order => {
                if (dateAry.indexOf(order.date) === -1 && this.selectShop === order.shopName) {
                    Object.keys(this.statusObj).forEach((status) => {
                        if (this.statusObj[status].statusBool && order.status === this.statusObj[status].statusName) {
                            dateAry.push(order.date);
                        }
                    })
                }
            })
            // 日期升序
            dateAry.sort((a, b) => a.localeCompare(b)).unshift(allTxt);
            return dateAry;
        },
        selectSameOption() {
            return function(selectShopName, shopName) {
                return selectShopName === shopName;
            }
        }
    },
    methods: {
        resetChoose() {
            Object.keys(this.statusObj).forEach((status) => {
                this.statusObj[status].statusBool = false;
            })
            this.selectDate = '所有日期';
        },
        clickShopSelect(shop) {
            this.selectShop = shop.shopName;
            this.selectDate = '所有日期';
            this.isOpenShopSelect = false;
        },
        clickDateSelect(date) {
            this.selectDate = date;
            this.isOpenDateSelect = false;
        },
        clickCancelBtn() {
            this.$store.dispatch('updateIsShowNotice', true);
            this.$store.dispatch('updateNoticeText', '取消預約成功');
        },
        clickOverBtn() {
            this.$store.dispatch('updateIsShowNotice', true);
            this.$store.dispatch('updateNoticeText', '已用餐成功');
        },
        clickDeleteBtn() {
            this.$store.dispatch('updateIsShowNotice', true);
            this.$store.dispatch('updateNoticeText', '紀錄刪除成功');
        },
        goTop() {
            $('html,body').scrollTop(0, 0);
        },
        goTopScroll() {
            $('html,body').animate({ scrollTop: (0, 0) }, 'slow');
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.member-reserve {
    .title {
        padding-left: 30px;
        font-size: 24px;
        font-weight: 700;
    }
    .txt {
        margin-left: 3px;
    }
    .choose {
        cursor: pointer;
        width: 50%;
        height: 40px;
        text-align: center;
        border-bottom: 1px solid #DCDCDC;
        font-weight: 700;
        &.active {
            border-bottom: 2.5px solid $main-brow-text; 
        }
    }
    .order {
        position: relative;
        padding: 35px 20px;
        border-bottom: 1px dashed $main-light-blue-text;
        .btn-close {
            right: 10px;
            margin-top: -4px;
            transition: .3s;
            &:hover {
               &::after, &::before {
                   background-color: #000;
                   box-shadow: none;
               }
            }
            &::after, &::before {
                height: 3px;
                width: 28px;
                background-color: #7d7d7d;
            }
        }
        .icon-dot {
            margin-left: -8px;
        }
        .shop {
            margin-bottom: 15px;
            .name {
                font-size: 18px;
                font-weight: 700;
            }
        }
        .borderBtn {
            border: 1px solid $main-brow-text;
            background-color: transparent;
            color: $main-brow-text;
            margin-left: 15px;
            width: 100px;
            height: 43px;
            transition: .2s all;
            text-align: center;
            letter-spacing: 1px;
            &:hover, &.active {
                background-color: $main-brow-text;
                color: $main-white-text;
            }
        }
        .orderStatus {
            margin-top: 31px;
            position: relative;
            .statusTxt {
                position: relative;
                &::before {
                    content: '';
                    width: 60px;
                    height: 10px;
                    position: absolute;
                    margin-top: 10px;
                    margin-left: -4px;
                    background-color: #aa83437c;
                }
            }
        } 
    }
    .noOrder {
        padding: 120px 0 40px 0;
        .icon-calendar {
            font-size: 64px;
        }
        .txt {
            font-size: 20px;
            margin-top: 30px;
        }
    }
    .goTop {
        cursor: pointer;
        margin-top: 30px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid $main-blue-text;
        position: relative;
        font-size: 24px;
        &::before {
            transform: rotate(90deg);
            position: absolute;
            top: 4px;
        }
        &:hover {
            background-color: $main-blue-text;
            color: #fff;
        }
    }
    .shopSelect {
        margin: 55px 0 40px 0;
        .selectTitle {
            margin: 0 15px;
        }
    }
    .shop-custom-select {
        position: relative;
        width: 150px;
        line-height: 43px;
        letter-spacing: 1px;
        &.date-custom-select {
            width: 160px;
        }
        .selected {
            background-color: #fff;
            border: 1px solid $main-white-555;
            border-radius: 5px;
            padding-left: 23px;
            cursor: pointer;
            &::before {
                font-size: 13px;
                position: absolute;
                right: 12px;
                top: 33%;
                transform: rotate(90deg);
            }
        }
        .items {
            background-color: #fff;
            border-radius: 0px 0px 6px 6px;
            border: 1px solid $main-white-555;
            border-top: 0;
            position: absolute;
            box-shadow: rgb(0 0 0 / 10%) 0px 8px 10px;
            overflow: hidden;
            left: 0;
            right: 0;
            top: 40px;
            padding-top: 5px;
            z-index: 2;
            &.selectHide {
                display: none;
            }
            .item {
                color: #858586;
                padding-left: 25px;
                cursor: pointer;
                &:hover, &.selectPick{
                    background-color: $main-white-555;
                    color: #fff;
                }
            }
        }
    }
}
</style>