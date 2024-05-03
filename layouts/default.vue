<template>
  <v-app id="icis">
    <app-menu />

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppMenu from '@/components/Menu/AppMenu.vue'
export default {
  components: {
    AppMenu,
  },
  // middleware: ['auth'],
  data() {
    return {}
  },
}
</script>
