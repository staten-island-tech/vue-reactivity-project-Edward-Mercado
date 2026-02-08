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
        @deleteProfile="(profile) => {deleteProfile(profile)}"
        @selectProfile="(profile) => {selectProfile(profile)}"
        @pushProfile="(profile) => {pushProfile(profile)}"
        :profiles="profileObjects"
        > </user-creator>

        <div v-if="deleting" class="w-full min-h-[100vh] h-auto bg-gradient-to-tr from-rose-800/30 to-rose-600/30 flex flex-row flex-wrap p-1 gap-3 rounded-box">
          <delete-reminder @deleteReminderCard="(reminder) => {deleteReminderCard(reminder)}" v-for="reminder in reminders" :key="reminder.reminderName" :reminder="reminder"></delete-reminder>
        </div>

        <div v-else class="w-full min-h-[100vh] h-auto bg-gradient-to-tr from-slate-800/70 to-slate-600/70 flex flex-row flex-wrap p-1 gap-3 rounded-box">
          <reminder-card v-for="reminder in reminders" :key="reminder.reminderName" :reminder="reminder"> </reminder-card>
        </div>

        <div v-if="deleting" class="fixed bg-red-600/90 text-rose-950 funnel-sans-title rounded-box text-xl left-5 h-10 flex items-center px-2"> Click on a reminder to delete it! </div>
        <button v-if="deleting" @click="deleting=false"  class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn hover:bg-red-300 active:bg-red-500 w-10 h-10 fixed bg-white text-black funnel-sans-title rounded-box text-3xl p-5 right-5"> X </button>

        <bad-reminder v-if="badReminderCreated"
        @closeMenu="badReminderCreated = false"></bad-reminder>

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
    import userCreator from '@/components/UserCreator.vue'
    import badReminder from '@/components/BadReminder.vue'

    let creatingReminder = ref(false)
    let badReminderCreated = ref(false)
    let sortingReminders = ref(false)
    let deleting = ref(false)
    let editingUser = ref(false)

    let profileObjects = JSON.parse(localStorage.getItem("profiles")) || []
    //let profileObjects = reactive([])
    // reactive({values: JSON.parse(localStorage.getItem('reminders'))}) ||

    function getReminders() {
      let selectedProfile = profileObjects.find(profile => profile.selected === true)
      if(!selectedProfile) {
        return reactive([])
      }
      return reactive(selectedProfile.reminders)
    }
    function getProfileName() {
      let selectedProfile = profileObjects.find(profile => profile.selected === true)
      if (!selectedProfile) {
        return "N/A"
      } else {
        return selectedProfile.name
      }
    }

    let reminders = getReminders() || reactive([])
    let currentProfileName = getProfileName()

    function deleteProfile(profile) {
      let targetProfile = profileObjects.find((pro) => pro.name === profile.name)
      profileObjects.splice(profileObjects.indexOf(targetProfile), 1)
    }

    function selectProfile(profile) {
      reminders = reactive(profile.reminders)
      currentProfileName = profile.name

      let targetProfile = profileObjects.find((pro) => pro.name === profile.name)
      profileObjects.forEach((profile) => profile.selected = false)
      targetProfile.selected = true
      editingUser.value = false
      saveData()
    }

    function pushProfile(profile) {
      profileObjects.unshift(profile)
      selectProfile(profile)
    }

    function saveData() {
      localStorage.setItem("profiles", JSON.stringify(profileObjects))
    }

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
        reminders.sort((a, b) => a.reminderName.localeCompare(b.reminderName))
      } else if (type === 'urgency') {
        reminders.sort((a, b) => b.urgency - a.urgency)
      } else if(type==="date-due") {
        reminders.sort((a,b) => dateToNum(a.dateDue) - dateToNum(b.dateDue))
      } else if(type==="date-created") {
        reminders.sort((a,b) => dateToNum(a.dateCreated) - dateToNum(b.dateCreated))
      }
    }

    function isLeapYear(year) {
      if(year % 4 === 0) {
        if(year % 100 !== 0) {
          return true
        } else {
          if(year%400 === 0) {
            return true
          } 
          return false
        }
      } return false
    }

    function isValidDate(reminderSubmission) {
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let maxMonthDays = daysInMonth[reminderSubmission.dateDue.m - 1]
      if(maxMonthDays >= reminderSubmission.dateDue.d) {
        return true
      } else {
        if(maxMonthDays === 28 && reminderSubmission.dateDue.d === 29) {
          if(isLeapYear(reminderSubmission.dateDue.y)) {
            return true
          }
        }
        return false
      }
    }

    function acceptFormSubmission(reminderSubmission) {
      creatingReminder.value = false
      if(!reminders.find((reminder) => reminder.reminderName === reminderSubmission.reminderName)  && isValidDate(reminderSubmission)) {
        reminders.push(reminderSubmission)
        saveData()
      } else {
        badReminderCreated.value = true
      }
    }

    function deleteReminderCard(reminder) {
      const value = reminders.find((reminderValue) => reminderValue.reminderName === reminder.reminderName)

      reminders.splice(reminders.indexOf(value), 1)
      saveData()
    }

    function deleteAllReminders() {
      reminders.length = 0
      saveData()
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