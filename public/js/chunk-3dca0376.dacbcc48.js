(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dca0376"],{"04d1":function(e,t,s){var a=s("342f"),o=a.match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},"07c3":function(e,t,s){"use strict";s.r(t);var a=s("7a23"),o=function(e){return Object(a["C"])("data-v-0d7f652a"),e=e(),Object(a["A"])(),e},n={class:"member-reserve"},c=o((function(){return Object(a["h"])("h1",{class:"title"},"預約紀錄",-1)})),r=o((function(){return Object(a["h"])("p",{class:"txt main-white-aaa"},"- 目前僅提供前十筆紀錄。",-1)})),i={class:"shop"},d={class:"name d-flex"},h={class:"main-white-aaa d-flex"},l={class:"fw-700 data d-flex"},m={class:"mr-2"},f=o((function(){return Object(a["h"])("span",null,null,-1)})),u=Object(a["j"])("預定時間:"),p={class:"d-flex time-block"},b={class:"mr-2 d-block"},O={class:"d-block"},w={class:"fw-700 data d-flex"},j=o((function(){return Object(a["h"])("span",{class:"mr-2"},"訂位人數:",-1)})),g={class:"fw-700 data d-flex"},v=o((function(){return Object(a["h"])("span",{class:"mr-2"},"聯絡人:",-1)})),x={class:"fw-700 data d-flex"},I=o((function(){return Object(a["h"])("span",{class:"mr-2"},"手機號碼:",-1)})),S={class:"recordTime align-self-end main-white-aaa fs-14"},k=["onClick"],N={key:1,class:"statusTxt fw-700"},C={class:"d-flex justify-content-center"},T={key:0,class:"noOrder"},z=o((function(){return Object(a["h"])("p",{class:"icon-calendar text-align-center"},null,-1)})),D=o((function(){return Object(a["h"])("p",{class:"txt fw-700 text-align-center"},"目前無任何紀錄",-1)})),W=[z,D];function y(e,t,s,o,z,D){return Object(a["z"])(),Object(a["g"])("div",n,[c,r,Object(a["h"])("div",{onClick:t[2]||(t[2]=function(){return D.goTop&&D.goTop.apply(D,arguments)}),class:"d-flex mb-3"},[Object(a["h"])("div",{onClick:t[0]||(t[0]=function(e){z.isShowNowOrder=!0,D.getMemberReseveList()}),class:Object(a["q"])([{active:z.isShowNowOrder},"choose"])},"即將用餐",2),Object(a["h"])("div",{onClick:t[1]||(t[1]=function(e){z.isShowNowOrder=!1,D.getMemberReseveList()}),class:Object(a["q"])([{active:!z.isShowNowOrder},"choose"])},"歷史紀錄",2)]),(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(z.newMemberReseveData,(function(e,t){return Object(a["z"])(),Object(a["g"])("div",{key:t,class:"order"},[Object(a["h"])("div",i,[Object(a["h"])("p",d,"茶六燒肉堂 - "+Object(a["I"])(e.shopName),1),Object(a["h"])("p",h,Object(a["I"])(D.shopAddress(e.shopName)),1)]),Object(a["h"])("div",l,[Object(a["h"])("p",m,[Object(a["h"])("span",{class:Object(a["q"])([{"main-brow-text":z.isShowNowOrder},"mr-1 icon-ok"])},null,2),f,u]),Object(a["h"])("p",p,[Object(a["h"])("span",b,Object(a["I"])(e.date),1),Object(a["h"])("span",O,Object(a["I"])(e.time),1)])]),Object(a["h"])("p",w,[Object(a["h"])("span",{class:Object(a["q"])([{"main-brow-text":z.isShowNowOrder},"mr-1 icon-ok"])},null,2),j,Object(a["h"])("span",null,Object(a["I"])(e.people)+"人",1)]),Object(a["h"])("p",g,[Object(a["h"])("span",{class:Object(a["q"])([{"main-brow-text":z.isShowNowOrder},"mr-1 icon-ok"])},null,2),v,Object(a["h"])("span",null,Object(a["I"])(e.memberName),1)]),Object(a["h"])("p",x,[Object(a["h"])("span",{class:Object(a["q"])([{"main-brow-text":z.isShowNowOrder},"mr-1 icon-ok"])},null,2),I,Object(a["h"])("span",null,Object(a["I"])(e.cellphone),1)]),Object(a["h"])("div",{class:Object(a["q"])([[{orderStatus:!z.isShowNowOrder},{"mt-2":z.isShowNowOrder}],"d-flex justify-content-bewteen"])},[Object(a["h"])("p",S,"於 "+Object(a["I"])(e.bookDate)+" 預約",1),z.isShowNowOrder?(Object(a["z"])(),Object(a["g"])("a",{key:0,onClick:function(t){return D.clickCancelBtn(e.OID)},class:"borderBtn"},"取消預約",8,k)):Object(a["f"])("",!0),z.isShowNowOrder?Object(a["f"])("",!0):(Object(a["z"])(),Object(a["g"])("p",N,Object(a["I"])(e.status),1))],2)])})),128)),Object(a["h"])("div",C,[z.newMemberReseveData.length>1?(Object(a["z"])(),Object(a["g"])("div",{key:0,onClick:t[3]||(t[3]=function(){return D.goTopScroll&&D.goTopScroll.apply(D,arguments)}),class:"goTop transition-0-3 icon-left-open"})):Object(a["f"])("",!0)]),0===z.newMemberReseveData.length?(Object(a["z"])(),Object(a["g"])("div",T,W)):Object(a["f"])("",!0)])}var R=s("49f9"),M=(s("822f"),s("6b0d")),A=s.n(M);const L=A()(R["a"],[["render",y],["__scopeId","data-v-0d7f652a"]]);t["default"]=L},"49f9":function(e,t,s){"use strict";(function(e){s("d3b7"),s("159b"),s("4e82");var a=s("5ca2");t["a"]={data:function(){return{maxDataCount:10,isShowNowOrder:!0,memberReseveData:[],newMemberReseveData:[],shopPointData:a.shop,isLoadingOver:!1}},computed:{memberId:function(){return this.$store.state.memberId},shopAddress:function(){var e=this;return function(t){var s="";return e.shopPointData.forEach((function(e){t===e.shopName&&(s=e.address)})),s}}},methods:{clickCancelBtn:function(e){var t=this;this.$store.dispatch("updateIsShowLoading",0);var s="/chaliu/UpdateOrderStatus";this.axios.post(s,{OID:e,newStatus:"已取消"}).then((function(e){t.$store.dispatch("updateIsShowLoading",1),t.isLoadingOver=!0,t.$store.dispatch("updateIsShowNotice",!0),t.$store.dispatch("updateNoticeText","取消預約成功"),t.getMemberReseveList()})).catch((function(e){console.log("error",e)}))},goTop:function(){e("html,body").scrollTop(0,0)},goTopScroll:function(){e("html,body").animate({scrollTop:0},"slow")},getMemberReseveList:function(){var e=this;this.isLoadingOver||this.$store.dispatch("updateIsShowLoading",0);var t="/chaliu/QueryMemberOrderInfo2";this.axios.post(t,{MID:this.memberId}).then((function(t){e.$store.dispatch("updateIsShowLoading",3),e.isLoadingOver=!1,"success"===t.data.status?e.memberReseveData=t.data.result:e.memberReseveData=[],e.orders()})).catch((function(e){console.log("error",e)}))},orders:function(){var e=this,t=[];this.memberReseveData.forEach((function(s){e.isShowNowOrder&&"訂位中"===s.status&&t.push(s),e.isShowNowOrder||"訂位中"===s.status||t.push(s)})),this.isShowNowOrder&&t.sort((function(e,t){return e.date.localeCompare(t.date)||e.time.localeCompare(t.time)})),this.isShowNowOrder||t.sort((function(e,t){return t.date.localeCompare(e.date)||t.time.localeCompare(e.time)})),t.length>this.maxDataCount&&(t.length=this.maxDataCount),this.newMemberReseveData=t}},mounted:function(){this.getMemberReseveList()}}}).call(this,s("1157"))},"4e82":function(e,t,s){"use strict";var a=s("23e7"),o=s("e330"),n=s("59ed"),c=s("7b0b"),r=s("07fa"),i=s("577e"),d=s("d039"),h=s("addb"),l=s("a640"),m=s("04d1"),f=s("d998"),u=s("2d00"),p=s("512c"),b=[],O=o(b.sort),w=o(b.push),j=d((function(){b.sort(void 0)})),g=d((function(){b.sort(null)})),v=l("sort"),x=!d((function(){if(u)return u<70;if(!(m&&m>3)){if(f)return!0;if(p)return p<603;var e,t,s,a,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:s=3;break;case 68:case 71:s=4;break;default:s=2}for(a=0;a<47;a++)b.push({k:t+a,v:s})}for(b.sort((function(e,t){return t.v-e.v})),a=0;a<b.length;a++)t=b[a].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}})),I=j||!g||!v||!x,S=function(e){return function(t,s){return void 0===s?-1:void 0===t?1:void 0!==e?+e(t,s)||0:i(t)>i(s)?1:-1}};a({target:"Array",proto:!0,forced:I},{sort:function(e){void 0!==e&&n(e);var t=c(this);if(x)return void 0===e?O(t):O(t,e);var s,a,o=[],i=r(t);for(a=0;a<i;a++)a in t&&w(o,t[a]);h(o,S(e)),s=o.length,a=0;while(a<s)t[a]=o[a++];while(a<i)delete t[a++];return t}})},"512c":function(e,t,s){var a=s("342f"),o=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},"5ca2":function(e){e.exports=JSON.parse('{"shop":[{"id":0,"shopName":"台中中清店","address":"台中市北屯區中清路二段1037號","phone":"04-2425-1138","img":"./static/images/point/01.jpg","mapUrl":"https://goo.gl/maps/8EbkeXnRYWrXgHqGA","mapIframe":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.4690367316184!2d120.65891531494152!3d24.19034728437427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691702e42a5169%3A0x460036a9f9dc10f7!2z6Iy25YWt54eS6IKJ5aCCKOS4rea4heW6lyk!5e0!3m2!1szh-TW!2stw!4v1644389873270!5m2!1szh-TW!2stw"},{"id":1,"shopName":"台中朝富店","address":"台中市西屯區朝富路258號","phone":"04-2258-7126","img":"./static/images/point/02.jpg","mapUrl":"https://goo.gl/maps/1UFa9DETffvibN5d9","mapIframe":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.2446789498863!2d120.63302601494105!3d24.16315028438757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693df1c46ae6e1%3A0xc1644740de8180d!2z6Iy25YWt54eS6IKJ5aCCKOacneWvjOW6lyk!5e0!3m2!1szh-TW!2stw!4v1644393145354!5m2!1szh-TW!2stw"},{"id":2,"shopName":"台中公益店","address":"台中市西區公益路268號","phone":"04-2328-1167","img":"./static/images/point/03.jpg","mapUrl":"https://goo.gl/maps/L8Bn64HWePWfRt2u8","mapIframe":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5905257819572!2d120.65218801494088!3d24.15101428439345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dd8423caa27%3A0x8641159ba314f374!2z6Iy25YWt54eS6IKJ5aCC5YWs55uK5bqX!5e0!3m2!1szh-TW!2stw!4v1644393211214!5m2!1szh-TW!2stw"},{"id":3,"shopName":"高雄博愛店","address":"高雄市左營區博愛二路238號","phone":"07-5566657","img":"./static/images/point/04.jpg","mapUrl":"https://goo.gl/maps/AwCfzMePdKwmQmsa9","mapIframe":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.807993328034!2d120.30115371491242!3d22.660946385137358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05022a8011d5%3A0xa563d2828127f1c2!2z6Iy25YWt!5e0!3m2!1szh-TW!2stw!4v1644393260072!5m2!1szh-TW!2stw"}]}')},"822f":function(e,t,s){"use strict";s("dec8")},addb:function(e,t,s){var a=s("f36a"),o=Math.floor,n=function(e,t){var s=e.length,i=o(s/2);return s<8?c(e,t):r(e,n(a(e,0,i),t),n(a(e,i),t),t)},c=function(e,t){var s,a,o=e.length,n=1;while(n<o){a=n,s=e[n];while(a&&t(e[a-1],s)>0)e[a]=e[--a];a!==n++&&(e[a]=s)}return e},r=function(e,t,s,a){var o=t.length,n=s.length,c=0,r=0;while(c<o||r<n)e[c+r]=c<o&&r<n?a(t[c],s[r])<=0?t[c++]:s[r++]:c<o?t[c++]:s[r++];return e};e.exports=n},d998:function(e,t,s){var a=s("342f");e.exports=/MSIE|Trident/.test(a)},dec8:function(e,t,s){}}]);
//# sourceMappingURL=chunk-3dca0376.dacbcc48.js.map