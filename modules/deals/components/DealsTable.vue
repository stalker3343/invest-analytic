<template>
  <div>
    <!-- eslint-disable vue/valid-v-slot  -->

    <app-table :loading="loading" :headers="headers" :items="normalizedDeals">
      <template #item.date="{ item }">
        {{ item.date | dataFIlter }}
      </template>

      <template #item.quantity="{ item }">
        <template v-if="item.quantity">
          {{ item.quantity }}
        </template>
      </template>

      <template #item.price="{ item }">
        <template v-if="item.price">
          {{ item.price }} {{ $options.currTextToSymb[item.currency] }}
        </template>
      </template>

      <template #item.commission.value="{ item }">
        <template v-if="item.commission">
          {{ item.commission.value }}
          {{ $options.currTextToSymb[item.commission.currency] }}
        </template>
      </template>

      <template #item.payment="{ item }">
        {{ item.payment }}
        {{ $options.currTextToSymb[item.currency] }}
      </template>
    </app-table>
  </div>
</template>

<script>
import { operetaionCodeToName } from '../constants'

// const currTextToSymb = {
//   USD: '$',
//   RUB: '₽',
// }
export default {
  filters: {
    dataFIlter(value) {
      const date = new Date(value)
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }
      return new Intl.DateTimeFormat('ru', options).format(date)
    },
  },
  currTextToSymb: {
    USD: '$',
    RUB: '₽',
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    deals: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Тикер',
          value: 'instrument.ticker',
        },
        {
          text: 'Название',
          value: 'instrument.name',
        },
        {
          text: 'Операция',
          value: 'operationType',
        },
        {
          text: 'Дата сделки',
          value: 'date',
        },
        {
          text: 'Количество',
          value: 'quantity',
        },

        {
          text: 'Цена',
          value: 'price',
        },

        {
          text: 'Коммисия',
          value: 'commission.value',
        },

        {
          text: 'Сумма',
          value: 'payment',
        },
      ],
    }
  },
  computed: {
    normalizedDeals() {
      return this.deals.map((el) => ({
        ...el,
        operationType: operetaionCodeToName[el.operationType],
      }))
    },
  },
}
</script>

<style></style>
