<template>
    <div class="orderMessage">
        <div class="container-620 w-100 d-flex flex-direction-col">
            <div class="form-group d-flex flex-direction-col">
                <p class="main-white-text form-title">訂位資訊</p>
                <div class="main-white-text form-data">
                    <p class="icon-location data-title">
                        <span class="data-title-2">分店：</span>
                        <span class="fw-700">{{orderMessage.shop}}</span>
                    </p>
                    <p class="icon-user data-title">
                        <span class="data-title-2">人數：</span>
                        <span class="fw-700">{{orderMessage.people}} 位</span>
                    </p>
                    <div class="d-flex">
                        <p class="icon-stopwatch data-title">
                            <span class="data-title-2">用餐時間： </span>
                        </p>
                        <div> 
                            <p class="fw-700">{{orderMessage.date}}</p>
                            <p class="fw-700">{{orderMessage.time.period}} {{orderMessage.time.time}}</p>
                        </div>
                    </div>
                </div>
                <a @click="preStepFn()" class="reviseBtn align-self-end">
                    <span class="main-brow-text fw-700 transition-0-3">修改資訊</span>
                    <span class="main-brow-text icon-pencil transition-0-3"></span>
                </a>
            </div>
            <div class="form-group">
                <p class="main-white-text form-title">訂位者資訊</p>
                <div class="main-white-text form-data">
                    <p class="icon-user data-title">
                        <span class="data-title-2">聯絡人：</span>
                        <input type="text" v-model="memberName">
                    </p>
                    <p class="icon-phone data-title">
                        <span class="data-title-2">電話：</span>
                        <input type="text" v-model="memberCellphone">
                    </p>
                    <p class="icon-mail data-title">
                        <span class="data-title-2">信箱：</span>
                        <input type="text" v-model="memberEmail">
                    </p>
                </div>
            </div>
            <a @click="nextStepFn()" class="btn-border align-self-end">
                <span class="btn-border-text fw-700 transition-0-3">送出預約單</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'orderMessage',
    data() {
        return {
            contact: {
                name: '',
                cellphone: '',
                mail: '',
            }
        }
    },
    computed: {
        orderMessage() {
            return this.$store.state.orderMessage;
        },
        memberName() {
            return this.$store.state.memberName;
        },
        memberCellphone() {
            return this.$store.state.memberCellphone;
        },
        memberEmail() {
            return this.$store.state.memberEmail;
        }
    },
    methods: {
        preStepFn() {
            this.$store.dispatch('updateOrderLevel', 1);
            this.goTop();
        },
        nextStepFn() {
            const contact = {
                name: this.contact.name,
                cellphone: this.contact.cellphone,
                mail: this.contact.mail
            };
            this.sendOrder(contact);
            this.$store.dispatch('updateOrderLevel', 3);
        },
        sendOrder(contact) {
            console.log('order',this.orderMessage, contact);
        },
        goTop() {
            $('html,body').scrollTop(0, 0);
        },
    },
    mounted() {
        this.contact = {
            name: this.memberName,
            cellphone: this.memberCellphone,
            mail: this.memberEmail,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.orderMessage {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .form-group {
        margin-bottom: 50px;
        position: relative;
        border: 1px solid #fff;
        .form-title {
            font-size: 18px;
            margin-top: 8px;
            letter-spacing: 3px;
            padding: 0 10px;
            position: absolute;
            top: -20px;
            left: 20px;
            background-color: rgb(44,38,38);
            border-radius: 50%;
        }
        .form-data {
            padding: 30px 30px 25px 30px;
            .data-title { 
                margin-bottom: 15px;
                &::before {
                    margin-right: 8px;
                }
            }
            .data-title-2 {
                margin-right: 8px;
            }
            input {
                background-color: rgba(255, 255, 255, 0.1);
                color: #fff;
                width: 100%;
                padding: 3px 30px;
                border: none;
                outline: 0;
                letter-spacing: 2px;
                font-weight: 700;
            }
            p {
                font-size: 18px;
                line-height: 30px;
                letter-spacing: 2px;
                font-family: "Courier New", Courier, monospace;
            }
        }
        .reviseBtn {
            position: absolute;
            cursor: pointer;
            padding: 5px;
            margin: 25px 15px;
            &:hover {
                span {
                    color: $main-white-text;
                }
            }
        }
    }
    .btn-border {
        width: 240px;
        height: 55px;
        margin: 0;
        letter-spacing: 3px;
        &::before {
            background-color: $main-brow-text;
        }
        &.btn-border:hover {
            .btn-border-text {
                color: $main-white-text;
            }
        }
    }
}
</style>
