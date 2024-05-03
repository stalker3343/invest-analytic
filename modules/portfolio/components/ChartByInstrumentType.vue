<template>
  <div>
    <h2 class="mb-3 icis-h5">Состав портфеля по категориям</h2>
    <div class="inst-type-chart">
      <v-skeleton-loader v-if="loading" type="image" />

      <highcharts v-else :options="highChartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
const instTypeToUI = {
  Stock: 'Акции',
  Etf: 'ETF/ПИФ',
  RUB: 'Рубли',
  USD: 'Доллары',
}

export default {
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

  computed: {
    highChartOptions() {
      return {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
        },
        title: {
          text: '',
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            },
          },
        },
        series: [
          {
            name: 'Доля',
            colorByPoint: true,
            dataSorting: {
              enabled: true,
              sortKey: 'y',
            },
            data: this.portfolioByInstType.map((el) => ({
              name: instTypeToUI[el.instrumentType],
              y: el.percent,
            })),
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.inst-type-chart {
  background: #fff;
  padding: 16px;
  border-radius: 16px;
}
</style>
