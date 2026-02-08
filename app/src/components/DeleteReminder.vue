<template>
    <div @click="$emit('deleteReminderCard', 'hi')"  class="min-w-[200px] w-[20%] min-h-[300px] h-[30%] bg-gradient-to-t from-red-300 to-red-200 rounded-box p-3 m-3 border-[4px] border-rose-100 flex flex-col justify-between
    shakey-animation
    ">
        <h2 class="funnel-sans-title text-2xl text-rose-900">
            Title Sample
        </h2>
        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Due:
            </h2>
            <h2 class="funnel-sans-title text-2xl text-rose-900">
                MM/DD/YYYY
            </h2>
        </div>

        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Created:
            </h2>
            <h2 class="funnel-sans-title text-2xl text-rose-900">
                MM/DD/YYYY
            </h2>
        </div>

        <div>
            <h2 class="funnel-sans-title text-lg text-black">
            Urgency Rating:
        </h2>
        <h2 class="funnel-sans-title text-2xl text-rose-900">
            (U!)/100
        </h2>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['deleteReminderCard'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}

.shakey-animation {
    animation: shakeyAnimation 1s ease-in infinite forwards;
}

@keyframes shakeyAnimation {
    0% {
        transform: rotate(0deg)
    }
    25% {
        transform: rotate(-4deg)
    }
    75% {
        transform: rotate(4deg)
    }
}
</style>