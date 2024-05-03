<template>
  <div>
    <!-- eslint-disable vue/valid-v-slot  -->

    <h2 class="mb-3 icis-h5">Состав портфеля по активам</h2>
    <app-table
      hide-default-footer
      disable-pagination
      :loading="loading"
      :headers="headers"
      :items="formatedPortfolioByInstType"
    >
      <template #item.price="{ item }">
        {{ item.price | filterNum }}
      </template>
      <template #item.profit="{ item }">
        {{ item.profit | filterNum }}
      </template>
      <template #item.percent="{ item }">
        {{ item.percent | filterNum }}
      </template>
    </app-table>
  </div>
</template>

<script>
import { filterNum } from '@/utils'

const instTypeToUI = {
  Stock: 'Акции',
  Etf: 'ETF/ПИФ',
  RUB: 'Рубли',
  USD: 'Доллары',
}

export default {
  filters: {
    filterNum,
  },
  props: {
    loading: {
      default: false,
      type: Boolean,
    },
    portfolioByInstType: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Актив',
          value: 'instrumentType',
          sortable: false,
        },
        {
          text: 'Текущая стоимость',
          value: 'price',
        },
        {
          text: 'Прибыль',
          value: 'profit',
        },
        {
          text: 'Текущая доля',
          value: 'percent',
        },
      ],
    }
  },

  computed: {
    formatedPortfolioByInstType() {
      return this.portfolioByInstType.map((instrument) => ({
        ...instrument,
        instrumentType: instTypeToUI[instrument.instrumentType],
      }))
    },
  },
}
</script>

<style lang="scss" scoped></style>
