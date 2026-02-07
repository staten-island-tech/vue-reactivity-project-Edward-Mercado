<template>
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
</script>

<style scoped>
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>