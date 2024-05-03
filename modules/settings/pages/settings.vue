<template>
  <div>
    <app-header title="Настройки"> </app-header>

    <app-page-container>
      <v-row>
        <v-col cols="8">
          <v-tabs vertical>
            <v-tab>
              <v-icon left> mdi-account </v-icon>
              Сектора экономики
            </v-tab>

            <v-tab-item class="pa-6">
              <v-row v-for="(instr, idx) in instrumentSector" :key="idx">
                <v-col align-self="center">
                  {{ instr.value }}
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="instrumentSector[idx].sector"
                    hide-details
                    clearable
                    :items="sectors"
                    solo
                    label="Сектор"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <!-- <div v-for=""></div> -->
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </app-page-container>
  </div>
</template>

<script>
// import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  components: {},
  data() {
    return {
      sectors: [
        {
          value: 'ene',
          text: 'Энергетика',
        },
        { text: 'Материалы', value: 'mate' },
        { text: 'Промышленность', value: 'Indus' },
        {
          text: 'Потребительские товары повседневного спроса',
          value: 'ConsEvery',
        },
        {
          text: 'Потребительские товары выборочного спроса',
          value: 'ConsЫelect',
        },
        { text: 'Здравоохранение', value: 'Health' },
        { text: 'Финансы', value: 'fin' },
        { text: 'Информационные технологии (IT-сектор)', value: 'it' },
        { text: 'Коммуникационные услуги', value: 'Comm' },
        { text: 'Недвижимость', value: 'realty' },
      ],
      instrumentSector: [
        { value: 'USD000UTSTOM', sector: '' },
        { value: 'SBERP', sector: '' },
        { value: 'FIVE', sector: '' },
        { value: 'TBIO', sector: '' },
        { value: 'FIXP', sector: '' },
        { value: 'MGNT', sector: '' },
        { value: 'TATNP', sector: '' },
        { value: 'GAZP', sector: '' },
      ],
    }
  },

  computed: {},
  watch: {
    instrumentSector: {
      deep: true,
      handler() {
        console.log('instrumentSector')
        localStorage.setItem(
          'instrumentSector',
          JSON.stringify(this.instrumentSector)
        )
      },
    },
  },
  mounted() {
    const res = localStorage.getItem('instrumentSector')
    if (res) {
      this.instrumentSector = JSON.parse(res)
    }
  },
  beforeDestroy() {},
  methods: {
    // ...mapActions('deals', ['GET_DEALS']),
    // ...mapMutations('deals', ['CLEAR_STATES']),
  },
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
</style>
