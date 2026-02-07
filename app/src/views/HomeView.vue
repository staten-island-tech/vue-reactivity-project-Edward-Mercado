<template>
    <section class="w-full h-full p-5 flex flex-col items-center bg-slate-900">
        <div class="flex lg:flex-row w-full justify-between items-center flex-col gap-4">
            <h1 class='funnel-sans-title text-8xl lg:text-left text-center bg-gradient-to-l from-white to-cyan-100 inline-block text-transparent bg-clip-text'> Reminder Creator</h1>
            <div class="flex flex-col flex-nowrap gap-4 lg:w-[20%] sm:w-[80%]">
                <button class="btn bg-white hover:bg-cyan-200 h-15 px-2 text-black funnel-sans-subttile "> Accounts</button>
                <button class="btn bg-white hover:bg-cyan-200 h-15 px-2 text-black funnel-sans-subttile "> Delete Reminders... </button>
            </div>
        </div>
        <div class="bg-cyan-200 w-full h-[1%] rounded-full my-3"> </div>
        <div v-if="creatingReminder" class="fixed left-[5%] top-[5%] w-[90%] h-[90%] bg-slate-300/70 z-10"> 
            you are creating a reminder. 
            <button class="btn bg-white text-black hover:bg-purple-500 px-5 z-100" @click="toggleReminder()"> close </button>
        </div>

    </section>
</template>

<script setup>
    import { ref } from 'vue'

    let creatingReminder = ref(false)
    
    function toggleReminder(){
        creatingReminder.value = !creatingReminder.value
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}
.funnel-sans-subttile {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>