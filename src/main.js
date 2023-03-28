import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mainTheme } from './config/theme'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'mainTheme',
    themes: {
      mainTheme
    }
  },
  components,
  directives
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
