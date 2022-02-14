<template>
  <Navbar/>
  <router-view/>
  <Footer/>
  <LoginView/>
  <Loading/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import LoginView from '@/views/LoginView.vue'
import Loading from '@/components/all/Loading.vue'

export default {
  name: 'all',
  components: {
    Navbar,
    Footer,
    LoginView,
    Loading
  }
}
</script>

<style lang="scss">
@import "../src/assets/scss/_all.scss";

* {
  text-align: left;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
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
