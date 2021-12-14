<template>
  <div class="home main-bg-img">
    <!-- <div class="index-banner"> -->
      <Banner/>
    <!-- </div> -->
    <!-- <div class="index-about"> -->
      <AboutText/>
      <SwiperTest/>
      <Delicacy/>
      <Reserve/>
    <!-- </div> -->

    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import AboutText from '@/components/AboutText.vue'
import SwiperTest from '@/components/SwiperTest.vue'
import Delicacy from '@/components/Delicacy.vue'
import Reserve from '@/components/Reserve.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    AboutText,
    SwiperTest,
    Delicacy,
    Reserve
  }
}
</script>

<style lang="scss" scoped>

.home {}

// .main-bg-img {
//   height: 2000px;
// }

</style>
