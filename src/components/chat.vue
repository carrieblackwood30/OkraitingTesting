<template>
    <div class="w-full min-h-[600px] border relative overflow-y-scroll">
        <div v-if="chatWith">
            <h3 class="border-b mx-2 my-4 text-xl">{{ chatWith }}</h3>

            <div 
                class="max-h-[580px] mx-8 my-2"
                v-for="message in sendMessage" 
                :key="message"
                >
                <p
                    class="border rounded-lg w-fit px-2"
                    :class="message.chatWith === chatWith ? 'bg-gray-500 ml-auto' : 'bg-blue-500'"
                    v-if="message.chatWith === chatWith && message.currentUser === currentUser || message.chatWith === currentUser && message.currentUser === chatWith "
                >{{ message.message }}</p>
            </div>

            <div class="absolute bottom-2 left-4 flex gap-2">
                <input 
                    v-model="userMessage"
                    type="text" 
                    placeholder="text a message..." 
                    class="border px-2 border-gray-400 rounded-lg w-[400px]">
                <button 
                    class="border px-2 rounded-xl bg-slate-500 text-white"
                    @click="addMessage()"
                    >send</button>
            </div>
        </div>

        <div v-else>
            <h3 class="m-8">please choose a chat...</h3>
        </div>

    </div>
</template>

<script setup>
    import { ref, watch } from "vue"

    const props = defineProps({
        currentUser: String,
        chatWith: String
    })

    const userMessage = ref('')

    const sendMessage = ref(JSON.parse(localStorage.getItem("chats")) || [])

    
    function addMessage() {
        if(userMessage.value != ''){
            sendMessage.value.push({
            currentUser: props.currentUser,
            chatWith: props.chatWith,
            message: userMessage.value
        })
        }

        localStorage.setItem("chats",JSON.stringify(sendMessage.value))

        userMessage.value = ''
    }


</script>