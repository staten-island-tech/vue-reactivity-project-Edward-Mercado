<template>
    <div>
        <form @submit.prevent="" class="w-full h-[20%] flex flex-row gap-3 items-center">
            <button @click="submitNewProfile()" class="btn bg-white hover:bg-emerald-300 active:bg-emerald-500 px-2 text-black funnel-sans-title p-3 h-20 w-20 transition duration-150 ease-in-out active:rotate-[-7deg] transform text-6xl"> + </button>
            <div class="gap-4 flex flex-col">
                <label for="profileName" class="funnel-sans-title text-2xl text-cyan-300"> Create New Profile</label>
                <input v-model="newProfile.profileName" id="profileName" type="text" class="input p-1 pl-4">
            </div>
        </form>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    const emit = defineEmits(['submitNewProfile'])

    let newProfile = reactive({
        profileName: '',
        reminders: []
    })

    function submitNewProfile() {
        if(profileName !== "") {
            emit('submitNewProfile', newProfile)
        }
    }

</script>

<style scoped>
.funnel-sans-title {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
</style>