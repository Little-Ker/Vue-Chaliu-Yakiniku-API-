<template>
  <div class="LoginView">
    <Login/>
    <NoticeModel/>
    <Register/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import NoticeModel from '@/components/NoticeModel.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Home',
  components: {
    Login,
    NoticeModel,
    Register,
  }
}
</script>

<style lang="scss" scoped>

</style>
