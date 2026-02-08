<template>
    <div class="pb-3 flex flex-row gap-4">
        <button class="transition duration-300 ease-in-out active:rotate-[-5deg] transform btn bg-white hover:bg-cyan-200 active:bg-cyan-400 h-10 w-10 text-black funnel-sans-subtitle p-0.5"> <img src="/images/user-icon.png" alt="profiles" class=""></button>
        <h2 class="funnel-sans-title text-3xl"> Current Profile Name: {{ currentProfileName }} </h2>      
    </div>
    <div class="flex flex-row flex-wrap justify-between">
        <div class="flex-row flex w-[40%] gap-4">
            <button @click="emit('openCreator')" class="btn bg-white hover:bg-emerald-300 active:bg-emerald-500 px-2 text-black funnel-sans-title p-3 text-2xl h-10 w-10 transition duration-150 ease-in-out active:rotate-[-7deg] transform"> + </button>
            <h2 class="funnel-sans-title text-3xl"> Reminders... </h2>      
        </div>
        <button @click="emit('toggleSort')"  class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 w-[20%]"> Sort... </button>
    </div>
</template>

<script setup>
    const emit = defineEmits(['toggleSort', 'openCreator'])
    defineProps({
        currentProfileName: {
            type: Text,
            required: true,
        }
    })
</script>

<style scoped>
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>