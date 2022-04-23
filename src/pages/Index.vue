<script setup lang="ts">

const { t } = useI18n()

const route = useRoute()


</script>

<template>
  <div class="flex items-center mt-15">
    <div class="flex-col w-120">
      <div class="hello text-2xl text-left">{{t('hello')}}</div>
      <div class="firstName text-6xl text-left">{{t('firstName')}}</div>
      <div class="mt-5 text-darkGrey text-left">{{t('intro')}}</div>
    </div>
    <div class="w-200">
      <img src="../assets/temporaryIndexImage.png" />
    </div>
    <div class="w-50" >
      <a href="https://github.com/adrienbgcz">
        <img src="/src/assets/github.png" />
        <button class="bg-white text-secondary text-sm font-weight-semibold rounded-xl h-10 w-30 px-4 mb-10 shadow-xl mt-5 ">
          {{t('github')}}
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.hello {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: -2px;
}
.firstName {
  font-family: "Bungee Shade", cursive;
}

</style>