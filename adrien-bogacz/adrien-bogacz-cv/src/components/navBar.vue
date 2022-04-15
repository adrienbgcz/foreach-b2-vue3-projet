<script setup lang="ts">
  import {RouterLink} from 'vue-router'
  const {t} = useI18n()

</script>

<template>
  <div w:flex="~" w:justify="center">
    <RouterLink to="/" class="text_style">{{t('about')}}</RouterLink>
    <RouterLink to="/education" class="text_style">{{ t('education') }}</RouterLink>
    <RouterLink to="/experience" class="text_style">{{ t('experience') }}</RouterLink>
  </div>
  <button class="bg-sky-500 text-white font-weight-semibold p-3 rounded-xl">
    {{t('contact')}}
  </button>
</template>

<style scoped>
.text_style {
  @apply hover:text-sky-500
  @apply font-medium
  @apply hover:underline
  @apply p-4
}

</style>
