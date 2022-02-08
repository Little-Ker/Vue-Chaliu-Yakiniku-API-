<template>
<div @click.self="closeRegister" class="register" v-if="isShowRegister">
    <div class="form-section pos-relative">
        <div @click="closeRegister" class="btn-close"></div>
        <p class="title text-align-center fw-700">新會員註冊</p>
        <form action="login-form" autoComplete="off" @submit.prevent="clickRegisterBtn" class="position-relative">
            <div class="form choose-select">
                <div class="formBox d-flex flex-direction-column">
                    <label for="contactAcc" class="colLabel">帳號</label>
                    <input v-model="acc" type="text" @keydown="keydownNull($event)" autoComplete="off" maxlength="10" @focus="focusInputFn" @blur="blurInputFn" class="form-control" id="contactAcc" required>
                </div>
                <div class="formBox">
                    <label for="contactPwd" class="colLabel">密碼</label>
                    <input v-model="pwd" type="password" @keydown="keydownNull($event)" autoComplete="off" minlength="5" placeholder="請輸入至少5個字元" maxlength="10" @focus="focusInputFn" @blur="blurInputFn"  class="form-control" id="contactPwd" required>
                </div>
                <div :class="{'redTip': isShowTip}" class="formBox">
                    <label for="contactCheckPwd" class="colLabel">密碼確認</label>
                    <input v-model="checkPwd" type="password" @keydown="keydownNull($event)" maxlength="10" autoComplete="off" placeholder="請重複輸入密碼" @focus="focusInputFn" @blur="blurInputFn" class="form-control" id="contactCheckPwd" required>
                </div>
                <p v-if="isShowTip" class="tip">*密碼重複輸入錯誤</p>
                <div class="formBox d-flex flex-direction-column">
                    <label for="contactName" class="colLabel">姓名</label>
                    <input v-model="name" type="text" @keydown="keydownNull($event)" maxlength="5" autoComplete="off" @focus="focusInputFn" @blur="blurInputFn" class="form-control" id="contactName" required>
                </div>
                <div class="formBox d-flex flex-direction-column">
                    <label for="contactCellphone" class="colLabel">手機</label>
                    <input v-model="cellphone" type="tel" @keydown="keydownNull($event)" maxlength="10" autoComplete="off" @focus="focusInputFn" @blur="blurInputFn" class="form-control" id="contactCellphone" required>
                </div>
                <div class="formBox d-flex flex-direction-column">
                    <label for="contactEmail" class="colLabel">信箱</label>
                    <input v-model="email" type="email" @keydown="keydownNull($event)" maxlength="10" autoComplete="off" @focus="focusInputFn" @blur="blurInputFn" class="form-control" id="contactEmail" required>
                </div>
            </div>
            <div class="align-self-center mt-4">
                <button type="submit" class="btn d-block text-align-center main-brow-text">
                    <span>註 冊</span>
                </button>
            </div>
        </form>
        <a @click="clickLoginBtn" class="d-flex justify-content-end">
            <span class="register-btn main-light-blue-text">已經有帳號<span class="fw-700"> 登入</span></span>
        </a> 
    </div>
</div>
</template>

<script>
export default {
    computed: {
        isShowRegister() {
            return this.$store.state.isShowRegister;
        },
    },
    data() {
        return {
            isShowTip: false,
            acc: null,
            pwd: null,
            checkPwd: null,
            name: null,
            cellphone: null,
            email: null,
        }
    },
    methods: {
        clickRegisterBtn() {
            if (this.pwd !== this.checkPwd) {
                this.isShowTip = true;
                return;
            }
            this.clickLoginBtn();
            this.$store.dispatch('updateIsShowNotice', true);
            this.$store.dispatch('updateNoticeText', '會員註冊成功！');

        },
        clickLoginBtn() {
            this.$store.dispatch('updateIsShowLogin', true);
            this.$store.dispatch('updateIsShowRegister', false);
            this.clearForm();
        },
        clearForm() {
            this.acc = null;
            this.pwd = null;
            this.checkPwd = null;
            this.name = null;
            this.cellphone = null;
            this.isShowTip = false;
        },
        focusInputFn(el) {
            $(el.target).closest('.formBox').addClass('inputFocus');
        },
        blurInputFn(el) {
            $(el.target).closest('.formBox').removeClass('inputFocus');
        },
        closeRegister() {
            this.$store.dispatch('updateIsShowRegister', false);
            this.startScrollBar();
            this.clearForm();
        },
        // 禁止輸入空格
        keydownNull(e){
            if(e.keyCode == 32){
                e.returnValue = false
            }
        },
        // 禁用滾動條
        stopScrollBar() {
            var tops = $(document).scrollTop();
            $(document).bind("scroll",function (){$(document).scrollTop(tops); });
        },
        startScrollBar() {
            $(document).unbind("scroll");
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.register {
    overflow: auto;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn-close {
        right: 25px;
        top: 30px;
        &:hover {
           ::after, ::before {
                box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 3px, rgba(0, 0, 0, 0.1) 0px 3px 3px;
            } 
        }
    }
    .register-btn {
        line-height: 0;
        margin-top: 40px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        height: 20px;
        &::after, &::before {
            content: '';
            width: 100%;
            height: 0.5px;
            background-color: $main-light-blue-text;
            position: absolute;
            bottom: 1px;
            left: 0;
        }
        &::before {
            left: -100%;
        }
        &:hover::after {
            animation: lineHoverOne .3s forwards;
        }
        &:hover::before {
            animation: lineHoverTwo .3s .3s forwards;
        }
    }
    .form-section {   
        background-color: #fff;
        border-radius: 5px;
        padding: 50px 40px;
        box-shadow: rgba(250, 250, 193, 0.25) 0px 13px 27px -5px, rgba(255, 255, 255, 0.3) 0px 8px 16px -8px;
        .title {
            font-size: 24px;
            margin-bottom: 40px;
        }
        .btn {
            width: 100%;
            height: 45px;
            letter-spacing: 5px;
            border-radius: 0;
            background-color: $main-blue-text;
            color: $main-white-text;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 6px, rgba(0, 0, 0, 0.1) 0px 3px 6px;
            &:hover {
                background-color: $main-light-blue-text
            }
        }
        .tip {
            position: relative;
            top: -10px;
            left: 104px;
            font-size: 14px;
            color: rgb(212, 4, 4);
        }
        .redTip {
            border-color: rgb(212, 4, 4) !important;
            .colLabel::before {
                background-color: rgb(212, 4, 4) !important;
            }
        }
        .formBox {
            width: 100%;
            border: solid 1px rgba(205, 205, 205, 0.7);
            display: flex;
            align-items: center;
            position: relative;
            transition: all 0.4s;
            margin-bottom: 20px;
            .colLabel {
                text-align: center;
                min-width: 90px;
                padding: 0 10px;
                margin: 4px 0;
                line-height: 25px;
                color: #242424;
                position: relative;
                z-index: 1;
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0px;
                    width: 0.5px;
                    height: 25px;
                    background-color: rgba(205, 205, 205, 0.7);
                }
            }
            .form-control{
                border:none;
                letter-spacing: 2px;
                &:focus {
                    color: #495057;
                    background-color: transparent;
                    outline: 0;
                    box-shadow: 0 0 0 0 rgb(0 123 255 / 25%);
                }
            }
            &.inputFocus .colLabel::before,
            &:hover .colLabel::before {
                background-color: $main-light-blue-text;
            }
            &.inputFocus,
            &.inputFocus label,
            &:hover {
                border-color: $main-light-blue-text;
                color: $main-blue-text !important;
            }
        }
    }
}
</style>