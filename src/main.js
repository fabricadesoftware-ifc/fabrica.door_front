import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2EtLKuBlyydE0iCnmyl7QJQtyu0BCd20',
  authDomain: 'portafabrica-8cb73.firebaseapp.com',
  projectId: 'portafabrica-8cb73',
  storageBucket: 'portafabrica-8cb73.appspot.com',
  messagingSenderId: '523960680213',
  appId: '1:523960680213:web:7ffe620847c286dd52731c'
}

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
export const auth = getAuth()

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
