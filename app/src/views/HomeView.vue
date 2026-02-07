<template>
    <section class="w-full h-full p-5 flex flex-col bg-slate-900">
        <div class="flex lg:flex-row w-full justify-between items-center flex-col gap-4">
            <h1 class='funnel-sans-title text-8xl lg:text-left text-center bg-gradient-to-l from-white to-cyan-200 inline-block text-transparent bg-clip-text'> Reminder Tracker</h1>
            <div class="flex lg:flex-row flex-col bg-slate-300/70 flex-nowrap gap-4 lg:relative fixed right-2 p-2 rounded-box">
                <button class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn bg-white hover:bg-cyan-200 active:bg-cyan-400 lg:h-20 lg:w-20 h-15 w-15 px-2 text-black funnel-sans-subtitle p-3"> <img src="/images/user-icon.png" alt="profiles" class="max-h-full"></button>
                <button class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn bg-white hover:bg-red-300 active:bg-red-500 lg:h-20 lg:w-20 h-15 w-15 px-2 text-black funnel-sans-subttile p-3"> <img src="/images/trashcan.png" alt="delete" class="max-h-full"> </button>
            </div>
        </div>
        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5"> </div>

        <div class="flex flex-row flex-wrap justify-between">
            <div class="flex-row flex w-[40%] gap-4">
                <button @click="creatingReminder = true" class="btn bg-white hover:bg-emerald-300 active:bg-emerald-500 px-2 text-black funnel-sans-title p-3 text-2xl h-10 w-10 transition duration-150 ease-in-out active:rotate-[-7deg] transform"> + </button>
                <h2 class="funnel-sans-title text-3xl"> Reminders... </h2>      
            </div>
            <button @click="sortingReminders = !sortingReminders"  class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 w-[20%]"> Sort... </button>
        </div>

        <div v-if="sortingReminders" class=" flex flex-col flex-wrap justify-between pt-3 gap-1">
            <h2 class="funnel-sans-title text-3xl italic"> Sorting Options </h2> 

            <div class="flex flex-row flex-wrap justify-between">
                <button class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%] my-2"> Alphabetically </button>
                <button class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%] my-2"> Urgency </button>
                <button class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%]  my-2"> Date Due </button>
                <button class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%]  my-2"> Date Created </button>
            </div>
        </div>

        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-5"> </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'

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