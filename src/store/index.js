import { createStore } from 'vuex'

export default createStore({
    state: {
        isShowLogin: false,
        isLoginSuccess: false,
        isShowNotice: false,
        isShowRegister: false,
        isShowRegisterNotice: false,
    },
    actions: {
        updateIsShowLogin(context, isShowLogin) {
            context.commit('SetIsShowLogin', isShowLogin);
        },
        updateIsLoginSuccess(context, isLoginSuccess) {
            context.commit('SetIsLoginSuccess', isLoginSuccess);
        },
        updateIsShowNotice(context, isShowNotice) {
            context.commit('SetIsShowNotice', isShowNotice);
        },
        updateIsShowRegister(context, isShowRegister) {
            context.commit('SetIsShowRegister', isShowRegister);
        },
        updateIsShowRegisterNotice(context, isShowRegisterNotice) {
            context.commit('SetIsShowRegisterNotice', isShowRegisterNotice);
        },
    },
    // 改state資料
    mutations: {
        SetIsShowLogin(state, isShowLogin) {
            state.isShowLogin = isShowLogin;
        },
        SetIsLoginSuccess(state, isLoginSuccess) {
            state.isLoginSuccess = isLoginSuccess;
        },
        SetIsShowNotice(state, isShowNotice) {
            state.isShowNotice = isShowNotice;
        },
        SetIsShowRegister(state, isShowRegister) {
            state.isShowRegister = isShowRegister;
        },
        SetIsShowRegisterNotice(state, isShowRegisterNotice) {
            state.isShowRegisterNotice = isShowRegisterNotice;
        },
    },
    modules: {}
})