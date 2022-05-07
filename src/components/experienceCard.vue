<script setup lang="ts">
import IcBaselineCheckBox from '~icons/ic/baseline-check-box'
const { t } = useI18n()

defineProps({
  date1: {
    type: String,
    required: true,
  },
  date2: {
    type: String,
    required: false,
  },
  experienceName: {
    type: String,
    required: true,
  },
  enterprise: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  details : {
    type: Array,
    required: true
  }

})


</script>

<template>
  <div class="grid grid-rows-1 grid-cols-[1fr,7fr] my-5">
    <div class="text-white text-sm container flex align-center">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#0C8FE5"/>
      </svg>
      <div class="centered flex flex-col font-medium">
        <span>{{date1}}</span>
        <span>{{t('to')}}</span>
        <span>{{date2}}</span>
      </div>
    </div>

    <div class="p-5 ml-10 flex flex-col">
      <span class="text-left"><span class="font-bold">{{experienceName}}</span> / <span class="text-secondary">{{enterprise}}</span> {{description}}</span>
      <div v-for="detail in details" :key="detail">
        <ul>
          <li class="text-left">
            <span><IcBaselineCheckBox class="inline text-secondary mr-2"/>{{ detail }}</span>
          </li>
        </ul>
      </div>
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