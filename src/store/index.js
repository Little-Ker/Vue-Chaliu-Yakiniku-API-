import { createStore } from 'vuex'

export default createStore({
    state: {
        isShowLogin: false,
        isLoginSuccess: false,
        isShowLoginNotice: false,
    },
    actions: {
        updateIsShowLogin(context, isShowLogin) {
            context.commit('SetIsShowLogin', isShowLogin);
        },
        updateIsLoginSuccess(context, isLoginSuccess) {
            context.commit('SetIsLoginSuccess', isLoginSuccess);
        },
        updateIsShowLoginNotice(context, isShowLoginNotice) {
            context.commit('SetIsShowLoginNotice', isShowLoginNotice);
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
        SetIsShowLoginNotice(state, isShowLoginNotice) {
            state.isShowLoginNotice = isShowLoginNotice;
        },
    },
    modules: {}
})