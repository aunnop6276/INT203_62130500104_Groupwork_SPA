import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Favo from './components/Favo.vue'
import Button from './components/ClickButton.vue'

const app = createApp(App)
app.component('fav',Favo)
app.component('cbutton',Button)
app.use(router).mount('#app')

// createApp(App).use(router).mount('#app')
