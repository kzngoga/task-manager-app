<template>
  <Navbar />
  <main class="red">
    <p class="text-center text-success">Home</p>
  </main>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
export default {
  name: 'HomePage',
  components: {
    Navbar
  }
}
</script>

<style>
main {
  padding-top: 70px;
}
</style>
