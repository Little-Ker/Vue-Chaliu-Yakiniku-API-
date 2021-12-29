<template>
<div @click.self="closeLogin" class="login" v-if="isShowLogin">
    <div class="form-section pos-relative">
        <div @click="closeLogin" class="btn-close"></div>
        <p class="title text-align-center fw-700">會員登入</p>
        <form action="login-form" autocomplete="off" @submit.prevent="clickLoginBtn" class="position-relative">
            <div class="form choose-select">
                <div class="formBox d-flex flex-direction-column">
                    <label for="contactName" class="colLabel">帳號</label>
                    <input type="text" @focus="focusInputFn" @blur="blurInputFn" class="form-control" id="contactName" required>
                </div>
                <div class="formBox">
                    <label for="contactTel" class="colLabel">密碼</label>
                    <input type="password" @focus="focusInputFn" @blur="blurInputFn"  class="form-control" id="contactTel" required>
                </div>
            </div>
            <div class="align-self-center mt-4">
                <button type="submit" class="btn d-block text-align-center main-brow-text">
                    <span>登 入</span>
                </button>
            </div>
        </form>
        <!-- <div class="d-flex flex-direction-col align-items-center">
            <p class="orTxt text-align-center main-gray-text">or with</p>
            <div class="d-flex">
                <a href="#" class="loginIcon icon-gplus"></a>
                <a href="#" class="loginIcon icon-facebook"></a>
                <a href="#" class="loginIcon icon-line"></a>
            </div>
        </div> -->
        <a class="d-flex justify-content-end">
            <span class="register-btn main-light-blue-text">還沒有帳號？<span class="fw-700"> 註冊</span></span>
        </a> 
    </div>
</div>
</template>

<script>
export default {
    computed: {
        isShowLogin() {
            return this.$store.state.isShowLogin;
        },
    },
    data() {
        return {}
    },
    methods: {
        clickLoginBtn() {
            this.closeLogin();
            this.$store.dispatch('updateIsLoginSuccess', true);
            this.$store.dispatch('updateIsShowLoginNotice', true);
        },
        focusInputFn(el) {
            $(el.target).closest('.formBox').addClass('inputFocus');
        },
        blurInputFn(el) {
            $(el.target).closest('.formBox').removeClass('inputFocus');
        },
        closeLogin() {
            this.$store.dispatch('updateIsShowLogin', false);
            this.startScrollBar();
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

.login {
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
        margin-top: 50px;
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
            margin-bottom: 50px;
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
        .formBox {
            width: 100%;
            border: solid 1px rgba(205, 205, 205, 0.7);
            display: flex;
            align-items: center;
            position: relative;
            transition: all 0.4s;
            margin-bottom: 20px;
            .colLabel {
                min-width: 85px;
                padding: 0 0 0 20px;
                margin: 4px 0;
                line-height: 25px;
                color: #242424;
                position: relative;
                z-index: 1;
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 10px;
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
    .orTxt {
        margin: 40px 0 25px 0;
        position: relative;
        width: 100%;
        text-align: center;
        &::after, &::before {
            content: '';
            position: absolute;
            top: 50%;
            width: calc(100% - 200px);
            height: 0.5px;
            background-color: $main-gray-text;
        }
        &::after {
            left: 0; 
        }
        &::before {
            right: 0;
        }
    }
    .loginIcon {
        border: 2px solid $main-light-blue-text;
        width: 37px;
        height: 37px;
        border-radius: 50%;
        margin: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $main-light-blue-text;
        transition: .1s all;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 6px, rgba(0, 0, 0, 0.1) 0px 3px 6px;
        &:hover {
            background-color: $main-blue-text;
            color: #fff;
        }
    }
}
</style>