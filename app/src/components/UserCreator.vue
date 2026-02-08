<template>
    <div class="fixed w-[95%] h-[95%] top-[2.5%] left-[2.5%] glass rounded-box p-5 flex flex-col z-100">
        <div class="flex flex-row flex-nowrap justify-between items-center">
            <h1 class="funnel-sans-title text-5xl text-cyan-300"> User Menu </h1>
            <button @click="emit('closeMenu')"  class="btn bg-white hover:bg-red-300 active:bg-red-500 px-2 text-black funnel-sans-title p-3 text-2xl h-10 w-10 transition duration-150 ease-in-out active:rotate-[7deg] transform"> X </button>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['closeMenu'])
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