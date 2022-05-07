<script setup lang="ts">
import EducationCard from "@/components/educationCard.vue";
const { t } = useI18n()

const route = useRoute()


</script>

<template>
  <div class="mt-15">
    <EducationCard
        date1="2020"
        date2="2022"
        formation-name="Titre professionnel certifié 'Développeur Web et Web Mobile', niveau 5 Bac+2"
        school="ForEach Academy"
        city="Marcq-en-Baroeul"
    />

    <EducationCard
        date1="2010"
        date2="2012"
        formation-name="Master STAPS Activité Physique Adaptée pour la Santé"
        school="Université d'Artois"
        city="Liévin"
    />

    <EducationCard
        date1="2011"
        date2="2012"
        formation-name="Diplôme Universitaire de Préparation Physique"
        school="FFSEP Lille 2"
        city="Ronchin"
    />

    <EducationCard
        date1="2007"
        date2="2010"
        formation-name="Licence STAPS Activité Physique Adaptée pour la Santé"
        school="Université d'Artois"
        city="Liévin"
    />
  </div>

</template>
