import api from '../plugins/axios.js'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../main'
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const user = ref({})

  const setUser = (newUser) => {
    user.value = newUser
  }

  const logWithEmail = async (email, password) => {
    // tries to login with email.
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (UserCredential) => {
          console.log(UserCredential.user)
          user.value = UserCredential.user // user is logged in, and the Provider data is into User
          console.log(UserCredential.user.uid)
          const sync = await api.post('sync', {
            firebase_id: UserCredential.user.uid,
            name: UserCredential.user.email
          })

          if (sync.status === 200) {
            router.replace('/')
          }
          console.log(sync)
        })
        .catch((error) => {
          const errorCode = error.code // error code
          const errorMessage = error.message // error message
          console.log(errorCode, errorMessage) // loggin the error]
        })
    } catch (error) {
      console.log(error)
    }
  }

  const registerWithEmail = async (email, password) => {
    // tries to register with email.
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.replace('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = async () => {
    // tries to logout
    try {
      router.replace('/login')
      await signOut(auth)
      user.value = null
    } catch (error) {
      console.log(error)
    }
  }

  const isAuthenticated = () => {
    if (user.value.email) {
      return true
    } else {
      return false
    }
  }

  return { setUser, logWithEmail, logOut, user, isAuthenticated, registerWithEmail }
})
