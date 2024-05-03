<template>
  <component :is="componentName" :menu="menu" />
</template>

<script>
import AppMenuDesktop from './AppMenuDesktop.vue'
import AppMenuMobile from './AppMenuMobile.vue'

export default {
  components: {
    AppMenuDesktop,
    AppMenuMobile,
  },
  data() {
    return {
      menu: [
        {
          route: { name: 'portfolio' },
          icon: 'Dashboard',
          text: 'Портфель',
          subMenu: [],
        },
        {
          route: { name: 'deals' },
          icon: 'List-left',
          text: 'Сделки',
          subMenu: [],
        },
        {
          route: { name: 'settings' },
          icon: 'More',
          text: 'Настройки',
          subMenu: [],
        },
      ],
    }
  },
  computed: {
    componentName() {
      return this.$vuetify.breakpoint.mdAndUp
        ? 'AppMenuDesktop'
        : 'AppMenuMobile'
    },
  },
}
</script>

<style></style>
