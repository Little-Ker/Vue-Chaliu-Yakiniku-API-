import { createStore } from 'vuex'

export default createStore({
    state: {
        isShowLogin: false,
        isLoginSuccess: false,
        isShowNotice: false,
        isShowCheckNotice: false,
        noticeText: '',
        isShowRegister: false,
        // 會員資料
        memberName: 'Vivi',
        memberCellphone: '0911-111111',
        memberEmail: 'abc@gmail.com',
        memberPassword: '11111',
        // 管理員資料
        isAdiminsLogin: false,
        // 現在時刻
        nowTime: 0,
        // 預約單狀態
        orderLevel: 1,
        // 預約單資訊
        orderMessage: {
            shop: '',
            people: '',
            dateData: '',
            date: '',
            time: '',
        },
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
        updateIsShowCheckNotice(context, isShowCheckNotice) {
            context.commit('SetIsShowCheckNotice', isShowCheckNotice);
        },
        updateIsShowRegister(context, isShowRegister) {
            context.commit('SetIsShowRegister', isShowRegister);
        },
        // 會員資料
        updateMemberName(context, memberName) {
            context.commit('SetMemberName', memberName);
        },
        updateMemberCellphone(context, memberCellphone) {
            context.commit('SetMemberCellphone', memberCellphone);
        },
        updateMemberEmail(context, memberEmail) {
            context.commit('SetMemberEmail', memberEmail);
        },
        updateMemberPassword(context, memberPassword) {
            context.commit('SetMemberPassword', memberPassword);
        },
        // 管理員資料
        updateIsAdiminsLogin(context, isAdiminsLogin) {
            context.commit('SetIsAdiminsLogin', isAdiminsLogin);
        },
        // 現在時刻
        updateNowTime(context, nowTime) {
            context.commit('SetNowTime', nowTime);
        },
        // 預約單狀態
        updateOrderLevel(context, orderLevel) {
            context.commit('SetOrderLevel', orderLevel);
        },
        // 預約單資訊
        updateOrderMessage(context, orderMessage) {
            context.commit('SetOrderMessage', orderMessage);
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
        SetIsShowCheckNotice(state, isShowCheckNotice) {
            state.isShowCheckNotice = isShowCheckNotice;
        },
        SetIsShowRegister(state, isShowRegister) {
            state.isShowRegister = isShowRegister;
        },
        // 會員資料
        SetMemberName(state, memberName) {
            state.memberName = memberName;
        },
        SetMemberCellphone(state, memberCellphone) {
            state.memberCellphone = memberCellphone;
        },
        SetMemberEmail(state, memberEmail) {
            state.memberEmail = memberEmail;
        },
        SetMemberPassword(state, memberPassword) {
            state.memberPassword = memberPassword;
        },
        // 管理員資料
        SetIsAdiminsLogin(state, isAdiminsLogin) {
            state.isAdiminsLogin = isAdiminsLogin;
        },
        // 現在時刻
        SetNowTime(state, nowTime) {
            state.nowTime = nowTime;
        },
        // 預約單狀態
        SetOrderLevel(state, orderLevel) {
            state.orderLevel = orderLevel;
        },
        // 預約單資訊
        SetOrderMessage(state, orderMessage) {
            state.orderMessage = orderMessage;
        },
    },
    modules: {}
})