<template>
  <v-navigation-drawer
    app
    color="primary-dark"
    mini-variant
    mini-variant-width="120"
    permanent
  >
    <!-- <nuxt-link :to="{ name: 'index' }">
      <div class="logo">
        <img
          src="@/assets/svg/illustrations/logo-white.svg"
          class="logo__img"
        />
      </div>
    </nuxt-link> -->

    <v-menu
      v-for="(link, idx) in menu"
      :key="idx"
      :open-on-hover="Boolean(link.subMenu.length)"
      :open-on-click="false"
      offset-x
    >
      <template #activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <component
            :is="link.subMenu.length ? 'div' : 'nuxt-link'"
            :to="link.route"
            class="menu-item"
          >
            <app-icon :name="link.icon" />
            <div class="menu-item__text">{{ link.text }}</div>
          </component>
        </div>
      </template>

      <div v-if="link.subMenu.length" class="menu-popover">
        <nuxt-link
          v-for="(subMenuItem, subIdx) in link.subMenu"
          :key="subIdx"
          class="menu-popover__item"
          :to="subMenuItem.route"
        >
          {{ subMenuItem.text }}
        </nuxt-link>
      </div>
    </v-menu>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
}
.v-menu__content {
  border: 1px solid var(--v-dark-grey-3-base);
  box-shadow: 1px 9px 30px #edf0f3;
  border-radius: 16px;
}
.logo {
  padding: 20px 0px;
  cursor: pointer;
}
.logo__img {
  width: 76px;
  margin: 0 auto;
  display: block;
}
.menu-item {
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  color: var(--v-dark-white-base);
  opacity: 0.6;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    opacity: 1;
    background: var(--v-primary-main-base);
  }
}
.menu-item__icon {
  margin-bottom: 10px;
}
.menu-item__text {
}
.menu-popover {
  min-width: 150px;
  background: var(--v-dark-white-base);
  box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 8px 0px;
}
.menu-popover__item {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--v-dark-main-base);
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  &:hover {
    color: var(--v-primary-main-base);
  }
}
</style>
