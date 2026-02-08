<template> 
    <div>
        <form @submit.prevent="submitNewProfile()" class="w-full h-[20%] flex flex-row gap-3 items-center">
            <input type="submit" value="+" class="btn bg-white hover:bg-emerald-300 active:bg-emerald-500 px-2 text-black funnel-sans-title p-3 h-20 w-20 transition duration-150 ease-in-out active:rotate-[-7deg] transform text-6xl">
            <div class="gap-4 flex flex-col">
                <label for="profileName" class="funnel-sans-title text-2xl text-cyan-300"> Create New Profile</label>
                <input required v-model="newProfile.name" id="profileName" type="text" maxlength=20 class="input p-1 pl-4">
            </div>
        </form>
    </div>
</template>
<script setup>
    import { reactive } from 'vue'
    const emit = defineEmits(['submitNewProfile'])

    let newProfile = reactive({
        name: '',
        reminders: []
    })

    function submitNewProfile() {
        if(profileName !== "") {
            emit('submitNewProfile', JSON.parse(JSON.stringify(newProfile)))
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