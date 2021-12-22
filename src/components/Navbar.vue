<template>
<div class="nav">
    <div class="d-flex justify-content-bewteen">
        <router-link to="/" class="logo">
            <img :src="logoUrl" class="img-fit" alt="茶六">
        </router-link>
        <div class="d-flex menu">
            <router-link :to="item.url" v-for="(item, index) in linkList" :key="index" class="link">{{item.txt}}</router-link>
            <a class="loginBtn transition-0-3">會員登入</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            logoUrl: require('@/assets/images/all/logo02.png'),
            linkList: [
                {
                    txt: '活動新訊',
                    url: '/about'
                },
                {
                    txt: '美食饗宴',
                    url: '/about'
                },
                {
                    txt: '門市據點',
                    url: '/about'
                },
                {
                    txt: '線上訂位',
                    url: '/about'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.nav {
    display: block;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    background: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0)0%, rgba(0, 0, 0, 0.4)30%, rgba(0, 0, 0, 1)100%);
    height: 90px;
    .menu {
        a {
            color: $main-white-text;
            letter-spacing: 2px;
            font-size: 14px;
            margin-left: 30px;
        }
        .link {
            padding: 9px 15px;
            margin-top: 20px;
            position: relative;
            &::after {
                content: '';
                width: 0;
                height: 0.5px;
                background-color: #fff;
                position: absolute;
                bottom: 15px;
                left: 0px;
                right: 0px;
                margin: auto;
                transition: .3s;
            }
            &:hover::after {
                width: 40%;
            }
        }
        .loginBtn {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70px;
            width: 100px;
            background-color: $main-brow-text;
            &:hover {
                background-color: #c7994f;
                color: #fff;
            }
        }
    }
    .logo {
        height: 40px;
        margin-top: 25px;
        margin-left: 30px;
    }
}
</style>