<template>
    <section class="w-full h-full p-5 flex flex-col bg-slate-900">

        <title-screen></title-screen>

        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5"> </div> <!-- line. -->

        <main-menu 
        @toggleSort="sortingReminders = !sortingReminders" 
        @openCreator="creatingReminder = true"> </main-menu>

        <sorting-options v-if="sortingReminders"></sorting-options>

        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5"> </div> <!-- line. -->

        <reminder-creator v-if="creatingReminder"
        @removeCreator="creatingReminder = false"></reminder-creator>

    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import TitleScreen from '@/components/TitleScreen.vue'
    import ReminderCreator from '@/components/ReminderCreator.vue' 
    import SortingOptions from '@/components/SortingOptions.vue'
    import MainMenu from '@/components/MainMenu.vue'

    let creatingReminder = ref(false)
    let sortingReminders = ref(false)

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
.funnel-sans-subttile {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
}
</style>