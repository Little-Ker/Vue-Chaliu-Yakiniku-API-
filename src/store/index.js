import { createStore } from 'vuex'

export default createStore({
    state: {
        isShowLogin: false,
        isLoginSuccess: false,
        isShowNotice: false,
        noticeText: '',
        isShowRegister: false,
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
        updateNoticeText(context, noticeText) {
            context.commit('SetNoticeText', noticeText);
        },
        updateIsShowRegister(context, isShowRegister) {
            context.commit('SetIsShowRegister', isShowRegister);
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
        SetNoticeText(state, noticeText) {
            state.noticeText = noticeText;
        },
        SetIsShowRegister(state, isShowRegister) {
            state.isShowRegister = isShowRegister;
        },
    },
    modules: {}
})