<template>
  <div>
    <!-- eslint-disable vue/valid-v-slot  -->
    <h2 class="mb-3 icis-h5">{{ type === 'funds' ? 'ПИФы/ETF' : 'Акции' }}</h2>
    <app-table
      hide-default-footer
      disable-pagination
      :loading="loading"
      :headers="headers"
      :items="stocks"
    >
      <template #item.marketPrice="{ item }">
        {{ item.marketPrice | filterNum }}
      </template>
      <template #item.marketValue="{ item }">
        {{ item.marketValue | filterNum }}
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

export default {
  filters: {
    filterNum,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    stocks: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Название',
          value: 'name',
        },
        {
          text: 'Количество',
          value: 'balance',
        },
        {
          text: 'Тек. цена, ₽',
          value: 'marketPrice',
        },
        {
          text: 'Тек стоимость, ₽',
          value: 'marketValue',
        },
        {
          text: 'Прибыль, ₽',
          value: 'profit',
        },
        {
          text: 'Доля в портфеле',
          value: 'percent',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
