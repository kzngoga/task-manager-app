<template>
  <v-app-bar app color="primary" dark>
    <v-image src="./logo.png" max-height="40"></v-image>
    <v-toolbar-title class="ml-2">My Website</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn variant="text" to="/">Home</v-btn>
    <v-btn variant="text" to="/about">About</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'MainNavbar'
}
</script>
<style></style>
