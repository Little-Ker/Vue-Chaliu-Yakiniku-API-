<template>
  <div class="home main-bg-img">
    <!-- <div class="index-banner"> -->
      <Banner/>
    <!-- </div> -->
    <!-- <div class="index-about"> -->
      <AboutText/>
    <!-- </div> -->

    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import AboutText from '@/components/AboutText.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    AboutText
  }
}
</script>

<style lang="scss" scoped>

.home {}

</style>
