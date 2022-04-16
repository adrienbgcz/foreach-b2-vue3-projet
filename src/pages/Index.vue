<script setup lang="ts">

const { t } = useI18n()

const route = useRoute()

onMounted(() => console.log(route.fullPath))
</script>

<template>
  <h1>Home</h1>

</template>
