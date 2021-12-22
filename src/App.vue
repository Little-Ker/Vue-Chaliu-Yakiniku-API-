<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'all',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import "../src/assets/scss/_all.scss";

* {
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// #nav {
//   // padding: 30px;
//   position: sticky;
//   top: 0;
//   z-index: 99;
//   height: 50px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
