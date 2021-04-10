/* eslint-disable */
import { createApp } from "vue"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import "primevue/resources/themes/saga-blue/theme.css" //theme
import "primevue/resources/primevue.min.css" //core css
import "primeicons/primeicons.css"
import "primeflex/primeflex.css" //icons

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.mount("#app")
