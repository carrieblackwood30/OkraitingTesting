<template>
    <div class="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 bg-gray-500/20">
        <ul role="list" class="p-6 divide-y divide-slate-200 bg-white">
            <h3>choose user:</h3>
        <div 
            class="cursor-pointer my-4"
            v-for="person in users.users" 
            :key="person.id" 
            @click="chooseUser(person)">
            <li class="flex py-4 first:pt-0 last:pb-0">
            <img class="h-10 w-10 rounded-full" :src="person.img" alt="" />
            <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-slate-900">{{ person.userName }}</p>
                <p class="text-sm text-slate-500 truncate"> {{ person.email }}</p>
            </div>
            </li>
            </div>
        </ul>
    </div>
</template>

<script setup>
    import router from "@/router";
    import { useUsersStore } from "@/stores/users";

    const users = useUsersStore()
    
    function chooseUser(person) {
        sessionStorage.setItem("chosenUser", person.userName)
        router.push("/chat")
    }
</script>