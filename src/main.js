import {createApp} from 'vue'
import App from './App.vue'

import {store} from "@/api/IMDb";


const app = createApp(App)

// use the store in the App
app.use(store)

app.mount('#app')

