<template>
  <Navbar />
  <main class="red">
    <p class="text-center text-primary text-lg">About</p>
  </main>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'

export default {
  name: 'AboutView',
  components: {
    Navbar
  }
}
</script>
