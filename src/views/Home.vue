<template>
  <div class="home">
    <Banner/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Banner
  }
}
</script>
