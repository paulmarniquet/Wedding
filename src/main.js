import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import VueCountdown from '@chenfengyuan/vue-countdown';


const app = createApp(App)

app.use(MotionPlugin)
app.component(VueCountdown.name, VueCountdown);

app.mount('#app')