<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <h1>Education</h1>
  <RouterLink to="/">{{t('about')}}</RouterLink>
  <RouterLink to="/education">{{ t('education') }}</RouterLink>
  <RouterLink to="/experience">{{ t('experience') }}</RouterLink>

</template>
