<script setup lang="ts">
  import {RouterLink} from 'vue-router'
  import navConstants from '../constants/navigationConstants'
  const {t} = useI18n()
  const route = useRoute()
  import IcRoundMinus from '~icons/ic/round-minus'

</script>

<template>
  <div class="flex justify-between mt-4 items-center" >
    <img src="../assets/profil.jpg" w:w="24" w:rounded="9xl"  />
    <div class="flex justify-center">
      <div class="flex flex-col items-center" >
        <RouterLink :to="`/`" :class="{text_style_clicked:route.fullPath===`/`}" class="text_style text-darkGrey">{{t('home')}}</RouterLink>
        <IcRoundMinus class="animate-fadeIn" :class="{underline:route.fullPath===`/`, hidden:route.fullPath!==`/`}"/>
      </div>
      <div class="flex flex-col items-center" >
        <RouterLink :to="`/${navConstants.PRESENTATION}`" :class="{text_style_clicked:route.fullPath===`/${navConstants.PRESENTATION}`}" class="text_style text-darkGrey">{{t('about')}}</RouterLink>
        <IcRoundMinus class="animate-fadeIn" :class="{underline:route.fullPath===`/${navConstants.PRESENTATION}`, hidden:route.fullPath!==`/${navConstants.PRESENTATION}`}"/>
      </div>
      <div class="flex flex-col items-center">
        <RouterLink :to="`/${navConstants.EDUCATION}`" :class="{text_style_clicked:route.fullPath===`/${navConstants.EDUCATION}`}" class="text_style text-darkGrey" >{{ t('education') }}</RouterLink>
        <IcRoundMinus class="animate-fadeIn" :class="{underline:route.fullPath===`/${navConstants.EDUCATION}`, hidden:route.fullPath!==`/${navConstants.EDUCATION}`}" />
      </div>
      <div class="flex flex-col items-center">
        <RouterLink :to="`/${navConstants.EXPERIENCE}`" :class="{text_style_clicked:route.fullPath===`/${navConstants.EXPERIENCE}`}" class="text_style text-darkGrey" >{{ t('experience') }}</RouterLink>
        <IcRoundMinus class="animate-fadeIn" :class="{underline:route.fullPath===`/${navConstants.EXPERIENCE}`, hidden:route.fullPath!==`/${navConstants.EXPERIENCE}`}" />
      </div>
    </div>
    <button class="bg-secondary text-white text-sm font-weight-semibold rounded-xl h-10 px-4 mb-10 shadow-xl ">
      {{t('contact')}}
    </button>
  </div>
</template>

<style scoped>
.text_style_clicked {
  @apply text-secondary
  @apply font-medium
  @apply px-4
}

.underline {
  @apply text-3xl
  @apply text-secondary
}


.text_style {
  @apply font-medium
  @apply px-4
}

.hidden {
  display:none;
}

</style>
