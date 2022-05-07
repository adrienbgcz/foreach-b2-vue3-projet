<script setup lang="ts">

const { t } = useI18n()

const route = useRoute()


</script>

<template>
  <img class="circle" src="/src/assets/circle.png"/>
  <div class="flex justify-between flex-wrap items-center mt-15">
    <div class="flex-col w-60">
      <div class="hello text-xl text-left">{{t('hello')}}</div>
      <div class="firstName text-5xl text-left">{{t('firstName')}}</div>
      <div class="mt-5 text-darkGrey text-left text-sm">{{t('intro')}}</div>
    </div>
    <div class="w-80">
      <img src="../assets/temporaryIndexImage2.png" />
    </div>
    <div class="w-30" >
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

.circle {
  width: 70%;
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

</style>