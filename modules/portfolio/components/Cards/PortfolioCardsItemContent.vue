<template>
  <div class="content">
    <div class="content__title">{{ item.title }}</div>
    <div class="content__value">
      {{ item.value | filterNum }} {{ item.suffix }}
    </div>
    <!-- <div class="content__hint">
      {{ item.subvalue | filterNum }} {{ item.subsuffix }}
    </div> -->
  </div>
</template>
<script>
import { filterNum } from '@/utils'

export default {
  filters: {
    filterNum,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.content__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: var(--v-dark-grey-1-base);
  margin-bottom: 10px;
}
.content__value {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--v-dark-main-base);
}
.content__hint {
  font-size: 13px;
  line-height: 18px;
  color: var(--v-dark-main-base);
}
</style>
