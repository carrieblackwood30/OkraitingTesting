<template>
  <main class="flex m-8 min-h-full">

    <div class="w-[400px]">
        <h3>choose chat: </h3>
        <div
          class="my-4"
          v-for="user in usersStore.users" 
          :key="user.id" 
          @click="chooseChat(user.userName)">
          <div class="flex gap-2 cursor-pointer" v-if="user.userName !== currentUser">
            <img :src="user.img" alt="" class="h-10 w-10 rounded-full">
            <div>
              <h3 class="text-sm font-medium text-slate-900">{{ user.userName }}</h3>
              <h3 class="text-sm text-slate-500 truncate">{{ user.email }}</h3>
            </div>
          </div>
      </div>
    </div>

    <chatVue :currentUser="currentUser" :chatWith="chatWith" />

  </main>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import { useUsersStore } from "@/stores/users";
import chatVue from "@/components/chat.vue";

const usersStore = useUsersStore()
const currentUser = ref(sessionStorage.getItem("chosenUser"))
const chatWith = ref('')

function chooseChat(user) {
  chatWith.value = user
}
</script>