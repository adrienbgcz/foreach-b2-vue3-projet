<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()

const { t } = useI18n()

</script>

<template>
  <h1>Présentation</h1>
  <RouterLink to="/">{{t('about')}}</RouterLink>
  <RouterLink to="/education">{{ t('education') }}</RouterLink>
  <RouterLink to="/experience">{{ t('experience') }}</RouterLink>

</template>

