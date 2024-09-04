import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
    
    const users = ref([
        {
            id: 0,
            userName: "Meirzhan",
            img: "https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
            email: "mock1@gmail.com"
        },
        {
            id: 1,
            userName: "Ivan",
            img: "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
            email: "mockEmail@gmail.com"
        },
        {
            id: 2,
            userName: "John Doe",
            img: "https://as1.ftcdn.net/v2/jpg/01/88/77/70/1000_F_188777023_l0BzfxSZL3QfXa24dHX3SbxZUBOx0chb.jpg",
            email: "someMail@gmail.com"
        }
    ])

  return { users }
})