<template>
  <div class="main-wrapper">
    <Navbar />
    <main class="main-wrapper__content my-10 px-16"><slot></slot></main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'MainWrapper',
  components: {
    Navbar
  }
};
</script>

<style scoped>
.main-wrapper {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
</style>
