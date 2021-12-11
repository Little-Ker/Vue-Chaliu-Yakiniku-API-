<template>
  <div class="home main-bg-img">
    <!-- <div class="index-banner"> -->
      <Banner/>
    <!-- </div> -->
    <!-- <div class="index-about"> -->
      <AboutText/>
      <SwiperTest/>
      <Delicacy/>
    <!-- </div> -->

    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import AboutText from '@/components/AboutText.vue'
import SwiperTest from '@/components/SwiperTest.vue'
import Delicacy from '@/components/Delicacy.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    AboutText,
    SwiperTest,
    Delicacy
  }
}
</script>

<style lang="scss" scoped>

.home {}

// .main-bg-img {
//   height: 2000px;
// }

</style>
