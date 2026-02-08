<template>
    <section class="w-full min-h-full p-5 flex flex-col bg-slate-900">

        <title-screen></title-screen>
    
        <div v-if="!deleting" class="w-full">
          <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5 text-xs">. </div> <!-- line. -->
          <main-menu 
        @toggleSort="sortingReminders = !sortingReminders" 
        @openCreator="creatingReminder = true"
        @toggleDeleting ="deleting = !deleting"
        @userMenu="editingUser=true"
        :currentProfileName="currentProfileName"
        > </main-menu>
        
        <sorting-options @sortReminders="(sortingType) => {sortReminders(sortingType)}" v-if="sortingReminders"></sorting-options>
        </div>

        <div v-else>
          <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5 text-xs">. </div> <!-- line. -->
          <button @click="deleteAllReminders()" class="btn bg-white hover:bg-red-300 active:bg-red-500 w-full h-10 px-2 text-black funnel-sans-title p-3 text-3xl"> DELETE ALL REMINDERS </button>
        </div>

        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5 text-xs">. </div> <!-- line. -->

        <reminder-creator v-if="creatingReminder"
        @removeCreator="creatingReminder = false"
        @submitForm="(reminderSubmission) => {acceptFormSubmission(reminderSubmission)}"
        ></reminder-creator>

        <user-creator v-if="editingUser"
        @closeMenu="editingUser = false"
        > </user-creator>

        <div v-if="deleting" class="w-full min-h-[100vh] h-auto bg-gradient-to-tr from-rose-800/30 to-rose-600/30 flex flex-row flex-wrap p-1 gap-3 rounded-box">
          <delete-reminder @deleteReminderCard="(reminder) => {deleteReminderCard(reminder)}" v-for="reminder in reminders.values" :key="reminder.reminderName" :reminder="reminder"></delete-reminder>
        </div>

        <div v-else class="w-full min-h-[100vh] h-auto bg-gradient-to-tr from-slate-800/70 to-slate-600/70 flex flex-row flex-wrap p-1 gap-3 rounded-box">
          <reminder-card v-for="reminder in reminders.values" :key="reminder.reminderName" :reminder="reminder"> </reminder-card>
        </div>

        <div v-if="deleting" class="fixed bg-red-600/90 text-rose-950 funnel-sans-title rounded-box text-xl left-5 h-10 flex items-center px-2"> Click on a reminder to delete it! </div>
        <button v-if="deleting" @click="deleting=false"  class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn hover:bg-red-300 active:bg-red-500 w-10 h-10 fixed bg-white text-black funnel-sans-title rounded-box text-3xl p-5 right-5"> X </button>

    </section>
</template>

<script setup>
    import { ref, reactive } from 'vue'
    import TitleScreen from '@/components/TitleScreen.vue'
    import ReminderCreator from '@/components/ReminderCreator.vue' 
    import ReminderCard from '@/components/ReminderCard.vue'
    import SortingOptions from '@/components/SortingOptions.vue'
    import MainMenu from '@/components/MainMenu.vue'
    import DeleteReminder from '@/components/DeleteReminder.vue'
    import userCreator from '@/components/userCreator.vue'

    let creatingReminder = ref(false)
    let sortingReminders = ref(false)
    let deleting = ref(false)
    let editingUser = ref(false)

    // reactive({values: JSON.parse(localStorage.getItem('reminders'))}) ||
    const reminders = reactive({values: JSON.parse(localStorage.getItem('reminders'))}) || reactive({
      values: []
    })
    let currentProfileName = "Edward"

    function dateToNum(date) { // pardon me this function is gonna be bad
      // i wrote the above comment before writing the function
      let yComponent = date.y.toString()
      let mComponent = date.m.toString()
      let dComponent = date.d.toString()

      if(date.m<10) {
        mComponent = "0" + mComponent
      }
      if(date.d<10) {
        dComponent = "0" + dComponent
      }
      return Number(`${yComponent}${mComponent}${dComponent}`)
    }

    function sortReminders(type) {
      if(type === 'alphabetically'){
        reminders.values.sort((a, b) => a.reminderName.localeCompare(b.reminderName))
      } else if (type === 'urgency') {
        reminders.values.sort((a, b) => b.urgency - a.urgency)
      } else if(type==="date-due") {
        reminders.values.sort((a,b) => dateToNum(a.dateDue) - dateToNum(b.dateDue))
      } else if(type==="date-created") {
        reminders.values.sort((a,b) => dateToNum(a.dateCreated) - dateToNum(b.dateCreated))
      }
    }

    function acceptFormSubmission(reminderSubmission) {
      creatingReminder.value = false
      if(!reminders.values.find((reminder) => reminder.reminderName === reminderSubmission.reminderName)) {
        reminders.values.push(reminderSubmission)
        localStorage.setItem("reminders", JSON.stringify(reminders.values))
      } else {
        console.log('error') // BLAST ERROR BADGE!!!!!!!!!
      }
    }

    function deleteReminderCard(reminder) {
      const value = reminders.values.find((reminderValue) => reminderValue.reminderName === reminder.reminderName)

      reminders.values.splice(reminders.values.indexOf(value), 1)
      localStorage.setItem("reminders", JSON.stringify(reminders.values))
    }

    function deleteAllReminders() {
      reminders.values.length = 0
      localStorage.setItem("reminders", JSON.stringify(reminders.values))
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
.funnel-sans-subtitle {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
}
</style>