<template>
  <div class="card">
    <portfolio-cards-item-content :item="indicator" />
  </div>
</template>
<script>
import PortfolioCardsItemContent from './PortfolioCardsItemContent.vue'
export default {
  components: {
    PortfolioCardsItemContent,
  },

  props: {
    indicator: {
      type: [Object, Array],
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  padding: 16px 20px;
  background: var(--v-dark-white-base);
  border-radius: 16px;
}
.prev-btn {
  color: var(--v-dark-grey-1-base);
}

::v-deep {
  .v-window__prev {
    top: 0px;
    left: initial;
    right: 40px;
  }
  .v-window__next {
    top: 0px;
  }
  .v-window__prev,
  .v-window__next {
    margin: 0px;
    background: none;
  }
}
</style>
