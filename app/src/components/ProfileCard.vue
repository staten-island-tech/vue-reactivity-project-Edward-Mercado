<template>
    <div class="carousel-item bg-gradient-to-tr from-cyan-200 to-cyan-100 w-[300px] h-[300px] rounded-box p-2 flex flex-col justify-between items-center">
        <h2 class="text-cyan-950 text-3xl funnel-sans-title"> {{  profile.name  }} </h2>

        <div class="flex flex-col h-[40%] w-full">
            <h2 class="text-cyan-950 text-xl funnel-sans-title text-center italic"> has </h2>
            <h2 class="text-cyan-800 text-4xl funnel-sans-title text-center"> { {{ profile.reminders.length }} } </h2>
            <h2 class="text-cyan-950 text-xl funnel-sans-title text-center italic"> reminder{{ plural(profile.reminders.length) }} </h2>
        </div>

        <div class="w-full flex flex-row justify-between items-center">
            <button @click="$emit('selectProfile', profile)" class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 w-[85%] my-2 h-8"> Select </button>
            <button @click="$emit('deleteProfile', profile)" class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn bg-white hover:bg-red-300 active:bg-red-500 h-8 p-1 text-black funnel-sans-subttile"> <img src="/images/trashcan.png" alt="delete" class="max-h-full"> </button>  
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits('deleteProfile', 'selectProfile')

    defineProps({
        profile: {
            type: Object,
            required: true,
        }
    })

    function plural(num) {
        if(num === 1) {
            return ""
        } return "s"
    }
</script>

<style scoped>
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>