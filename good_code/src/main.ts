import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import PokemonGatewayHttp from './gateways/PokemonGatewayHttp'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App);
app.provide("pokemonGateway", new PokemonGatewayHttp());
app.use(vuetify).mount('#app');
