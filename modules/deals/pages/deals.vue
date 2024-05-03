<template>
  <div>
    <app-header title="Сделки"> </app-header>

    <app-page-container>
      <portfolio-cards
        :loading="$fetchState.pending"
        :indicators="indicators"
      ></portfolio-cards>

      <DealsFilters v-model="filters" :deals="deals"></DealsFilters>

      <v-row>
        <v-col>
          <DealsTable
            :loading="$fetchState.pending"
            :deals="filteredDeals"
          ></DealsTable>
        </v-col>
      </v-row>
    </app-page-container>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import PortfolioCards from '@/modules/portfolio/components/Cards/PortfolioCards.vue'
import DealsTable from '../components/DealsTable.vue'
import DealsFilters from '../components/DealsFilters.vue'
const getCommisionSumm = (deals, currency) => {
  return deals
    .filter(
      (el) =>
        el.operationType === 'BrokerCommission' && el.currency === currency
    )
    .reduce((acc, el) => acc + el.payment, 0)
}
export default {
  components: {
    DealsTable,
    DealsFilters,
    PortfolioCards,
  },
  data() {
    return {
      filters: {
        operationType: '',
        ticker: '',
      },
    }
  },
  async fetch() {
    await this.GET_DEALS()
  },
  fetchOnServer: false,
  computed: {
    ...mapState('deals', ['deals']),

    filteredDeals() {
      let res = this.deals
      if (this.filters.operationType) {
        res = this.deals.filter(
          (el) => el.operationType === this.filters.operationType
        )
      }

      if (this.filters.ticker) {
        res = res.filter(
          (el) => el.instrument && el.instrument.ticker === this.filters.ticker
        )
      }

      return res
    },
    indicators() {
      const summ = this.deals
        .filter((el) => el.operationType === 'PayIn')
        .reduce((acc, el) => acc + el.payment, 0)

      const summCommisionRUB = getCommisionSumm(this.deals, 'RUB')
      const summCommisionUSD = getCommisionSumm(this.deals, 'USD')

      return [
        {
          title: 'Сумма пополнений',
          value: summ,
          suffix: '₽',
        },
        {
          title: 'Сумма коммисий ₽',
          value: summCommisionRUB,
          suffix: '₽',
        },
        {
          title: 'Сумма коммисий $',
          value: summCommisionUSD,
          suffix: '$',
        },
      ]
    },
  },
  beforeDestroy() {
    this.CLEAR_STATES()
  },
  methods: {
    ...mapActions('deals', ['GET_DEALS']),
    ...mapMutations('deals', ['CLEAR_STATES']),
  },
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
</style>
