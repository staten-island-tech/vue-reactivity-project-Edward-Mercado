<template>
<div 
  @click="emit('closeMenu')" 
  class="alert alert-info fixed bottom-5 right-3 bg-cyan-300 vertical-bounce flex flex-col gap-0"
>
  <h2 class="font-black text-xs">
    The reminder you attempted to create was invalid.
  </h2>
  <h2 class="font-black text-xs">
    Click to close this menu.
  </h2>
</div>
</template>

<script setup>
    const emit = defineEmits(['closeMenu'])
</script>

<style scoped>
.vertical-bounce {
    animation: verticalBounce 1s ease-in-out infinite alternate;
}

@keyframes verticalBounce {
    0% {
        transform: translateY(-5px)
    }
    100% {
        transform: translateY(5px)
    }
}
</style>