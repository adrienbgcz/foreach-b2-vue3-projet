<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { RouterView } from 'vue-router'
import NavBar from './components/navBar.vue'
</script>

<template>
  <NavBar />

  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

}

html {
  background-color: #F2F4F6;
  width: 75%;
  margin:auto;
}



</style>
