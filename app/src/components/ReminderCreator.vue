<template>
    <div class="fixed w-[95%] h-[95%] top-[2.5%] left-[2.5%] glass rounded-box p-5 flex flex-col">
        <div class="flex flex-row flex-nowrap justify-between items-center">
            <h1 class="funnel-sans-title text-5xl text-cyan-300"> Create Reminder </h1>
            <button @click="emit('removeCreator')" class="btn bg-white hover:bg-red-300 active:bg-red-500 px-2 text-black funnel-sans-title p-3 text-2xl h-10 w-10 transition duration-150 ease-in-out active:rotate-[7deg] transform"> X </button>
        </div>
    </div>
    <form @submit.prevent="emit('submitForm')" class="">
        <label for="reminder-name"></label>
        <input id="reminder-name" type="text" placeholder="Large" class="input input-lg" />
        <input type="date" class="input"/>
    </form>
</template>

<script setup>
    import { reactive } from 'vue'
    const emit = defineEmits(['removeCreator', 'submitForm'])
    const reminder = reactive({
        username: Text,
    })

    function submitForm() {

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
} /* stole this glass effect from 
a hilarious stoic fair noble king off the internet */

</style>