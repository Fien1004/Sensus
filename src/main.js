import { createApp } from "vue"
import { createPinia } from "pinia"
import router from "./app/router"
import "./assets/styles/tokens.css"
import "./assets/styles/base.css"
import "./style.css"
import App from "./App.vue"

createApp(App).use(createPinia()).use(router).mount("#app")
