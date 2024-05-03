<template>
  <v-row>
    <v-col cols="3">
      <v-autocomplete
        clearable
        :value="value.operationType"
        :items="operationTypes"
        solo
        label="Тип сделки"
        @input="$emit('input', { ...value, operationType: $event })"
      ></v-autocomplete>
    </v-col>

    <v-col cols="3">
      <v-autocomplete
        clearable
        :value="value.ticker"
        :items="nameOrTicker"
        solo
        label="Инструмент"
        @input="$emit('input', { ...value, ticker: $event })"
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
import { operetaionCodeToName } from '../constants'

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    deals: {
      type: Array,
      required: true,
    },
  },
  computed: {
    operationTypes() {
      return Array.from(new Set(this.deals.map((el) => el.operationType))).map(
        (operation) => ({
          value: operation,
          text: operetaionCodeToName[operation],
        })
      )
    },
    nameOrTicker() {
      const autocomleteItems = []
      const tickerToName = {}
      const dealsWithTIcker = this.deals.filter((el) => el.instrument)

      dealsWithTIcker.reduce((acc, el) => {
        const ticker = el.instrument.ticker
        if (!acc[ticker]) acc[ticker] = el.instrument.name
        return acc
      }, tickerToName)

      for (const [ticker, name] of Object.entries(tickerToName)) {
        autocomleteItems.push({
          value: ticker,
          text: `${name} [${ticker}]`,
        })
      }

      return autocomleteItems
    },
    tickres() {
      return this.nameOrTicker.map((el) => el.value)
    },
  },
}
</script>

<style></style>
