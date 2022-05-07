<script setup lang="ts">
import ExperienceCard from '@/components/experienceCard.vue'

const { t } = useI18n()

const detailsForeach = computed(() =>[t('detailsForeach1'), t('detailsForeach2'), t('detailsForeach3') ])
const experienceNameForeach = computed(() =>t('experienceNameForeach'))
const descriptionForeach = computed(() => t('descriptionForeach'))

const detailsDynacare = computed(() =>[t('detailsDynacare1'), t('detailsDynacare2'), t('detailsDynacare3') ])
const experienceNameDynacare = computed(() =>t('experienceNameDynacare'))
const descriptionDynacare = computed(() => t('descriptionDynacare'))

const detailsDecathlon = computed(() =>[t('detailsDecathlon1'), t('detailsDecathlon2'), t('detailsDecathlon3'), t('detailsDecathlon4') ])
const experienceNameDecathlon = computed(() =>t('experienceNameDecathlon'))
const descriptionDecathlon = computed(() => t('descriptionDecathlon'))
const now = computed(() => t('now'))
</script>

<template>
  <div class="mt-15">
    <ExperienceCard
        :details="detailsDecathlon"
        enterprise="Decathlon"
        :experience-name="experienceNameDecathlon"
        :description="descriptionDecathlon"
        date1="2021"
        :date2="now" />
    <ExperienceCard
        :details="detailsForeach"
        enterprise="ForEach Academy"
        :experience-name="experienceNameForeach"
        :description="descriptionForeach"
        date1="2020"
        date2="2021" />
    <ExperienceCard
        :details="detailsDynacare"
        enterprise="Dynacare"
        :experience-name="experienceNameDynacare"
        :description="descriptionDynacare"
        date1="2020"
        date2="2021" />

  </div>

</template>
