<template>
  <div class="page-container">
    <v-container fluid>
      <slot />
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.page-container {
  margin: 0 20px;
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    margin: 0px;
  }
}
</style>
