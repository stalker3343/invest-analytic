<template>
  <div>
    <h2 class="mb-3 icis-h5">{{ type === 'funds' ? 'ПИФы/ETF' : 'Акции' }}</h2>
    <div class="chart-card">
      <div class="inst-type-chart">
        <highcharts :options="highChartOptions"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
            data: this.stocks.map((el) => ({
              name: el.name,
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
.chart-card {
  background-color: white;
  padding: 16px;
}
</style>
