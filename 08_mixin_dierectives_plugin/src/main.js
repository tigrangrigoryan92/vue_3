import {createApp} from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "@/translatePlugin";

const app = createApp(App);

const am = {
  app: {
    title: "Փլագինները Vue-ում",
    changeBtn: 'Translate to English'
  }
}
const en = {
  app: {
    title: "Plugins in Vue",
    changeBtn: 'Թարգմանել հայեերեն',
  }
}

app.use(translatePlugin, {am, en});

app.mount('#app')
