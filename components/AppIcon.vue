<template>
  <svg
    :key="spriteHref"
    :class="['gl-icon']"
    :data-testid="`${name}-icon`"
    role="img"
    :height="size"
    :width="size"
    v-on="$listeners"
  >
    <use :href="spriteHref" />
  </svg>
</template>

<script>
import iconsPath from '@/assets/svg/sprite.svg'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 28,
      validator(value) {
        return [28, 20, 24].includes(value)
      },
    },
  },
  computed: {
    spriteHref() {
      return `${iconsPath}#${this.name}`
    },
  },
}
</script>

<style lang="scss">
.gl-icon {
  fill: currentColor;
}
</style>
