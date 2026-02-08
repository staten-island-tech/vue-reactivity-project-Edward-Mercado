<template>

    <div class="pt-5">
        <h2 class="funnel-sans-title text-2xl italic"> Sorting Options</h2>
        <div class="flex flex-row flex-wrap justify-between">
        <button @click="$emit('sortReminders', 'alphabetically')" class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%] my-2"> Alphabetically </button>
        <button @click="$emit('sortReminders', 'urgency')" class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%] my-2"> Urgency </button>
        <button @click="$emit('sortReminders', 'date-due')" class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%]  my-2"> Date Due </button>
        <button @click="$emit('sortReminders', 'date-created')" class="btn bg-white hover:bg-cyan-200 active:bg-cyan-400 px-2 text-black funnel-sans-subtitle font-black p-3 lg:w-[22%] w-[49%]  my-2"> Date Created </button>
        </div>
    </div>
</template>

<script setup>

  const emits = defineEmits(['sortReminders'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>