<template>
  <div class="app-header">
    <portal-target name="menu-nav" />

    <div v-if="title" class="app-header__title icis-h6">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.app-header {
  display: flex;
  align-items: center;
  background: var(--v-dark-white-base);
  margin-bottom: 30px;
  height: 70px;
}
.app-header__title {
  padding: 0px 36px;
  border-right: 1px solid var(--v-dark-grey-2-base);
  height: 100%;
  display: flex;
  align-items: center;
  flex: none;

  @media (max-width: map-get($grid-breakpoints, 'md')) {
    padding: 0px 16px;
  }
}
</style>
