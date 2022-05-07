<script setup lang="ts">

defineProps({
  date1: {
    type: String,
    required: true,
  },
  date2: {
    type: String,
    required: true,
  },
  formationName: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
})

/*
const emit = defineEmits(['update:done'])
*/


</script>

<template>
  <div class="grid grid-rows-1 grid-cols-[1fr,7fr] my-5">
    <div class="text-white text-sm container">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#0C8FE5"/>
      </svg>
      <div class="centered flex flex-col font-medium">
        <span>{{date1}}</span>
        <span>à</span>
        <span>{{date2}}</span>
      </div>
    </div>

    <div class="p-5 ml-10 flex justify-center align-center">
      <span><span class="font-bold">{{formationName}}</span> / <span class="text-secondary">{{school}}</span> {{city}}</span>
    </div>
  </div>
</template>

<style scoped>
  .container {
    position: relative;
    text-align: center;
    width: 100px
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>