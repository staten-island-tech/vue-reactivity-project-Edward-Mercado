<template>
    <div class="flex w-full justify-between items-center flex-row">
        <router-link to="/">
            <img src="/images/home.png" alt="home" class="h-20 w-20 bg-white rounded-box p-1 hover:bg-cyan-200 active:bg-cyan-400 transition duration-300 ease-in-out active:rotate-[-5deg] transform btn"> 
        </router-link>
        <h1 class='funnel-sans-title text-6xl text-right bg-gradient-to-l from-white to-cyan-200 inline-block text-transparent bg-clip-text w-full'> User Profile Management</h1>
    </div>
</template>

<script>

</script>

<style scoped>
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>