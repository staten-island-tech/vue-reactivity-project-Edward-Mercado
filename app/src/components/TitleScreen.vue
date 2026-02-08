<template>
    <div class="flex lg:flex-row w-full justify-between items-center flex-col gap-4">
        <h1 class='funnel-sans-title text-8xl text-center bg-gradient-to-l from-white to-cyan-200 inline-block text-transparent bg-clip-text w-full'> Reminder Tracker</h1>
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