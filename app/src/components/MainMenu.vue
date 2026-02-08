<template>
    <div class="flex flex-row flex-wrap justify-between">
        <button @click="emit('openCreator')" class="btn bg-white hover:bg-emerald-300 active:bg-emerald-500 px-2 text-black funnel-sans-title p-3 text-4xl h-10 w-10 transition duration-150 ease-in-out active:rotate-[-7deg] transform"> + </button>
        <h2 class="funnel-sans-title text-3xl"> View Your Reminders... </h2>  
        <button @click="emit('toggleDeleting')"  class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn bg-white hover:bg-red-300 active:bg-red-500 h-10 w-10 p-1 text-black funnel-sans-subttile"> <img src="/images/trashcan.png" alt="delete" class="max-h-full"> </button>    
    </div>
    <div class="pt-3 flex flex-row gap-4 justify-between">
        <button @click="emit('userMenu')"  class="transition duration-300 ease-in-out active:rotate-[-5deg] transform btn bg-white hover:bg-cyan-200 active:bg-cyan-400 h-10 w-10 p-1 text-black funnel-sans-subttile"> 
            <img src="/images/user-icon.png" alt="user-icon" class="max-h-full"> 
        </button>
        <h2 class="funnel-sans-title text-3xl text-center"> Current Profile Name: {{ currentProfileName }} </h2>      
        <button @click="emit('toggleSort')" class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn bg-white hover:bg-cyan-200 active:bg-cyan-400 h-10 w-10 text-black funnel-sans-subtitle p-1"> <img src="/images/sort.png" alt="sorting" class=""></button>
    </div>
</template>

<script setup>
    const emit = defineEmits(['toggleSort', 'openCreator', 'toggleDeleting', 'userMenu'])
    defineProps({
        currentProfileName: {
            type: String,
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