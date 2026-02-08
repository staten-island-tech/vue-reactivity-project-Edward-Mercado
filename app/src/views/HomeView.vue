<template>
    <section class="w-full min-h-full p-5 flex flex-col bg-slate-900">

        <title-screen
        @toggleDeleting ="deleting = !deleting"
        ></title-screen>

        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5"> </div> <!-- line. -->
    
        <main-menu 
        @toggleSort="sortingReminders = !sortingReminders" 
        @openCreator="creatingReminder = true"> </main-menu>

        <sorting-options @sortReminders="(sortingType) => {sortReminders(sortingType)}" v-if="sortingReminders"></sorting-options>

        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5"> </div> <!-- line. -->

        <reminder-creator v-if="creatingReminder"
        @removeCreator="creatingReminder = false"
        @submitForm="(reminderSubmission) => {acceptFormSubmission(reminderSubmission)}"
        ></reminder-creator>

        <div v-if="deleting" class="w-full min-h-[100vh] h-auto bg-gradient-to-tr from-rose-800/30 to-rose-600/30 flex flex-row flex-wrap p-1 gap-3 rounded-box">
          <delete-reminder @deleteReminderCard="(card) => {deleteReminderCard(card)}" v-for="reminder in reminders"></delete-reminder>
        </div>

        <div v-else class="w-full min-h-[100vh] h-auto bg-gradient-to-tr from-slate-800/70 to-slate-600/70 flex flex-row flex-wrap p-1 gap-3 rounded-box">
          <reminder-card v-for="reminder in reminders"> </reminder-card>
        </div>

        <div v-if="deleting" class="fixed bg-red-600/90 text-rose-950 funnel-sans-title rounded-box text-3xl p-5"> Click on a reminder to delete it! </div>

    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import TitleScreen from '@/components/TitleScreen.vue'
    import ReminderCreator from '@/components/ReminderCreator.vue' 
    import ReminderCard from '@/components/ReminderCard.vue'
    import SortingOptions from '@/components/SortingOptions.vue'
    import MainMenu from '@/components/MainMenu.vue'
    import DeleteReminder from '@/components/DeleteReminder.vue'

    let creatingReminder = ref(false)
    let sortingReminders = ref(false)
    let deleting = ref(false)
    
    const reminders = ['hi', 'hi', 'hi','hi', 'hi', 'hi']

    function sortReminders(type) {
      console.log(type)
    }

    function acceptFormSubmission(reminderSubmission) {
      console.log(reminderSubmission)
      creatingReminder.value = false
    }

    function deleteReminderCard(card) {
      console.log(card);
    }

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