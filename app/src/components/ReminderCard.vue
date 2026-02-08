<template>
    <div class="min-w-[200px] w-[20%] min-h-[300px] h-[30%] bg-gradient-to-t from-cyan-300 to-cyan-200 rounded-box p-3 m-3 border-[4px] border-cyan-100 flex flex-col justify-between">
        <h2 class="funnel-sans-title text-2xl text-cyan-900">
            Title Sample
        </h2>
        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Due:
            </h2>
            <h2 class="funnel-sans-title text-2xl text-cyan-900">
                MM/DD/YYYY
            </h2>
        </div>

        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Created:
            </h2>
            <h2 class="funnel-sans-title text-2xl text-cyan-900">
                MM/DD/YYYY
            </h2>
        </div>

        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Urgency Rating:
        </h2>
        <h2 class="funnel-sans-title text-2xl text-cyan-900">
            (U!)/100
        </h2>
        </div>
    </div>
</template>

<script setup>
    defineProps()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>