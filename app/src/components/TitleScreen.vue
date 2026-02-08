<template>
    <div class="flex lg:flex-row w-full justify-between items-center flex-col gap-4">
        <h1 class='funnel-sans-title text-8xl lg:text-left text-center bg-gradient-to-l from-white to-cyan-200 inline-block text-transparent bg-clip-text'> Reminder Tracker</h1>
        <div class="flex lg:flex-row flex-col bg-slate-300/70 flex-nowrap gap-4 lg:relative fixed right-2 p-2 rounded-box">
            <button @click="$emit('toggleDeleting')"  class="transition duration-300 ease-in-out active:rotate-[5deg] transform btn bg-white hover:bg-red-300 active:bg-red-500 lg:h-20 lg:w-20 h-15 w-15 px-2 text-black funnel-sans-subttile p-3"> <img src="/images/trashcan.png" alt="delete" class="max-h-full"> </button>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['toggleDeleting'])
</script>

<style scoped>
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>