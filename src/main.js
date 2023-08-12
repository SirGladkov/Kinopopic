// import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import IMDb from './api/IMDb'


new Vue({
    render: h => h(App),
    IMDb
}).mount('#app')
// createApp(App).mount('#app')
