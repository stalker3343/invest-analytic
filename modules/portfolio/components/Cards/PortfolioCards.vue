<template>
  <v-row>
    <template v-if="loading">
      <v-col v-for="(scalet, idx) in 3" :key="idx" cols="12" md="6" lg="4">
        <v-skeleton-loader type="article" />
      </v-col>
    </template>
    <template v-else>
      <v-col
        v-for="(indicator, idx) in indicators"
        :key="idx"
        cols="12"
        md="6"
        lg="4"
      >
        <portfolio-cards-item :indicator="indicator" />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import PortfolioCardsItem from '../Cards/PortfolioCardsItem.vue'

export default {
  components: {
    PortfolioCardsItem,
  },
  props: {
    loading: {
      default: false,
      type: Boolean,
    },
    indicators: {
      default: () => [],
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped></style>
