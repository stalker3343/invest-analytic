<template>
  <v-data-table v-bind="$attrs" v-on="$listeners">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot :name="slot" v-bind="scope"></slot>
    </template>
  </v-data-table>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss" scoped>
::v-deep {
  td {
    border-bottom: none !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--v-dark-main-base);
  }
  //   td:nth-child(2) {
  //     font-weight: 500;
  //     font-size: 16px;
  //     line-height: 21px;
  //   }

  tbody {
    tr:nth-child(odd) {
      background: var(--v-dark-grey-3-base);
    }
    tr:hover {
      background: var(--v-dark-grey-2-base) !important;
    }
  }
  thead {
    th {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      border-bottom: none !important;
      color: rgba(41, 45, 63, 0.48);
    }
  }
}
</style>
