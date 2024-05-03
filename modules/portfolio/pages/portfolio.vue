<template>
  <div>
    <app-header title="Состояние портфеля">
      <div class="course__title">Биржевой курс</div>
      <div class="course__value">
        <span class="course__currency"> USD </span>
        {{ crossRate.USD }} ₽
      </div>
    </app-header>

    <app-page-container>
      <portfolio-cards
        :loading="$fetchState.pending"
        :indicators="portfolioPage.indicators"
      ></portfolio-cards>

      <v-row>
        <v-col>
          <portfolio-by-instrument-type
            :loading="$fetchState.pending"
            :portfolio-by-inst-type="portfolioPage.portfolioByInstrumentType"
          ></portfolio-by-instrument-type>
        </v-col>
        <v-col>
          <chart-by-instrument-type
            :loading="$fetchState.pending"
            :portfolio-by-inst-type="portfolioPage.portfolioByInstrumentType"
          ></chart-by-instrument-type>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <table-by-inst-type
            :loading="$fetchState.pending"
            :stocks="portfolioPage.stocks"
            type="stocks"
          >
          </table-by-inst-type>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <table-by-inst-type
            :loading="$fetchState.pending"
            :stocks="portfolioPage.funds"
            type="funds"
          >
          </table-by-inst-type>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <chart-by-inst-type
            :loading="$fetchState.pending"
            :stocks="portfolioPage.stocks"
            type="stocks"
          >
          </chart-by-inst-type>
        </v-col>
        <v-col>
          <chart-by-inst-type
            :loading="$fetchState.pending"
            :stocks="portfolioPage.funds"
            type="funds"
          >
          </chart-by-inst-type>
        </v-col>
      </v-row>
    </app-page-container>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

import PortfolioByInstrumentType from '../components/PortfolioByInstrumentType.vue'
import PortfolioCards from '../components/Cards/PortfolioCards.vue'
import TableByInstType from '../components/TableByInstType.vue'
import ChartByInstrumentType from '../components/ChartByInstrumentType.vue'
import ChartByInstType from '../components/ChartByInstType.vue'

export default {
  components: {
    PortfolioByInstrumentType,
    PortfolioCards,
    TableByInstType,
    ChartByInstrumentType,
    ChartByInstType,
  },
  async fetch() {
    await this.GET_CROSS_RATE()
    await this.GET_PORTFOLIO_PAGE()
  },
  fetchOnServer: false,
  computed: {
    ...mapState('portfolio', ['crossRate', 'portfolioPage']),
  },
  beforeDestroy() {
    this.CLEAR_STATES()
  },
  methods: {
    ...mapActions('portfolio', ['GET_CROSS_RATE', 'GET_PORTFOLIO_PAGE']),
    ...mapMutations('portfolio', ['CLEAR_STATES']),
  },
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.course__title {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--v-dark-grey-1-base);
  margin-right: 34px;
  padding-left: 22px;
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    padding-left: 0px;
  }
}
.course__value {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--v-primary-main-base);
}
.course__currency {
  color: var(--v-dark-main-base);
}
</style>
