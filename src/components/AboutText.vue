<template>
<div class="aboutText main-margin-top pos-relative">
    <div class="index-about-img01 pos-absolute">
        <img class="img-fit" :src="img01" alt="圖片">
        <div class="blackHide pos-absolute"></div>
    </div>
    <div class="index-about-text container-920 d-flex justify-content-end">
        <div class="txt">
            <div class="title main-brow-text">
                <p>About Us</p>
                <h1>三茶六飯 おもてなし</h1>
            </div>
            <p class="content main-white-text">
                超越顧客期望的殷殷款待<br>
                日人的待客之道，這樣地悠然舒心。<br>
                陽光四落、香味四溢<br>
                在離美味最近的地方，與季節地物相遇。<br>
                感受肉品的滑嫩柔膩，<br>回味口中化開的一抹抹甘甜於此品嚐一道道四季風華，<br>
                在舌尖上體驗春夏秋冬而炭火旁的酣暢淋漓，<br>是人與食之間最美的醍醐味。<br>
                詩人望詩文入境，歌者求歌曲入情，<br>而茶六，則是美味與人的入心追求。<br>
            </p>
        </div>
    </div>
    <div class="index-about-img02 float-right">
        <img class="img-fit" :src="img02" alt="圖片">
    </div> 
    <div class="clearfix"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            img01: require('../assets/images/index/index-about-img01.jpg'),
            img02: require('../assets/images/index/index-about-img02.jpg')
        }
    }
}
</script>

<style lang="scss" scoped>
.aboutText {
    .index-about-img01 {
        width: 40%;
        height: 220px;
        top: 170px
    }
    .index-about-text {
        .txt{
            writing-mode: vertical-rl;
            text-align: left;
            z-index: 2;
            h1 {
                text-shadow: black 0.1em 0.1em 0.2em;
                font-size: 36px;
                margin-left: 30px;
            }
            .content {
                margin-top: 80px;
                font-size: 18px;
                letter-spacing: 0.1em;
                padding: 10px 0;
                line-height: 290%;
                background: linear-gradient(to left, rgba(255, 255, 255, 0.2) 1px, transparent 1px) transparent;
                background-size: 2.9em auto;
                background-position: 1px top;
            }
        }
    }
    .index-about-img02 {
        width: 80%;
        height: 520px;
        margin-top: -80px;
    }
}
</style>
