<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Banner/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Banner
  }
}
</script>
