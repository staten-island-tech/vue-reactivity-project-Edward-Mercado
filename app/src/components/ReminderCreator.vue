<template>
    <div class="fixed w-[95%] h-[95%] top-[2.5%] left-[2.5%] glass rounded-box p-5 flex flex-col z-100">
        <div class="flex flex-row flex-nowrap justify-between items-center">
            <h1 class="funnel-sans-title text-5xl text-cyan-300"> Create A Reminder </h1>
            <button @click="emit('removeCreator')" class="btn bg-white hover:bg-red-300 active:bg-red-500 px-2 text-black funnel-sans-title p-3 text-2xl h-10 w-10 transition duration-150 ease-in-out active:rotate-[7deg] transform"> X </button>
        </div>
        <form @submit.prevent="submitForm()" class="flex flex-col p-5 w-full h-full justify-between items-center">
            <div class="flex flex-col w-full h-[20%]">    
                <label for="reminderName" class="py-2 funnel-sans-title text-2xl text-cyan-200 text-left">Name of Reminder</label>
                <input maxlength="20" v-model="reminder.reminderName" id="reminderName" type="text" placeholder="Reminder Name" class="input input-lg p-1 w-[80%] pl-4" />
            </div>
            <div class="flex flex-col w-full h-[50%]">
                <label for="date-due" class="funnel-sans-title text-2xl text-cyan-200"> When will this reminder be due? </label>
                <div class="h-full w-full flex flex-row justify-between items-center">
                    <input v-model="reminder.dateDue.m" placeholder="MM"  min="1" max="12" type="number" class="w-[20%] h-[80%] rounded-2xl text-center text-3xl lg:text-5xl input validator">
                    <h2 class="text-4xl funnel-sans-title text-cyan-200"> / </h2>
                    <input v-model="reminder.dateDue.d" placeholder="DD"  min="1" max="31" type="number" class="w-[20%] h-[80%] rounded-2xl text-center text-3xl lg:text-5xl input validator">
                    <h2 class="text-4xl funnel-sans-title text-cyan-200"> / </h2>
                    <input v-model="reminder.dateDue.y" placeholder="YYYY"   min="2000" max="3000" type="number" class="w-[40%] h-[80%] rounded-2xl text-center text-3xl lg:text-5xl input validator">
                </div>
            </div>
            <div class="h-[20%] w-full flex flex-row justify-center gap-4 items-center">
                <label for="date-due" class="py-2 funnel-sans-title text-2xl text-cyan-200"> On a scale of 1-100, how urgent is this reminder? </label>
                <input v-model="reminder.urgency" placeholder="Rating..."  min="1" max="100" type="number" class="w-[25%] h-[80%] rounded-2xl text-center text-3xl lg:text-5xl input validator"></input>
            </div>
            <input type="submit"  class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black w-full items-center">
        </form>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    const emit = defineEmits(['removeCreator', 'submitForm'])
    let today = new Date()
    const reminder = reactive({
        reminderName: '',
        urgency: 0,
        dateDue: {
            y: '',
            m: '',
            d: '',
        },
        dateCreated: {
            y: today.getFullYear(),
            m: today.getMonth()+1,
            d: today.getDate(),
        },
    })

    function submitForm() {
        emit('submitForm', reminder)
    }

</script>

<style scoped>
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}

.glass {
    backdrop-filter: blur(20px) saturate(105%);
    -webkit-backdrop-filter: blur(20px) saturate(105%);
    background-color: rgba(17, 25, 40, 0.6);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}
/* stole this glass effect from 
a hilarious stoic fair noble bald bold benevolent king off the internet */
</style>