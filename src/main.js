import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mainTheme } from './config/theme';
import './assets/main.css';
import store from './store';
import authMixin from './mixins/authMixin';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'mainTheme',
    themes: {
      mainTheme
    }
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.mixin(authMixin);
app.mount('#app');
