<template>
  <div>
    <v-navigation-drawer
      v-model="isDrawerVisible"
      :width="288"
      class="hidden-md-and-up"
      app
      temporary
      color="primary-dark"
    >
      <div class="drawer-header d-flex align-center justify-space-between pa-5">
        <nuxt-link :to="{ name: 'index' }">
          <img src="@/assets/svg/illustrations/logo-white.svg" />
        </nuxt-link>
        <v-btn icon @click="isDrawerVisible = false">
          <v-icon color="dark-white"> mdi-close </v-icon>
        </v-btn>
      </div>

      <v-expansion-panels v-model="openedSubMenus" flat accordion>
        <template v-for="(link, i) in menu">
          <v-expansion-panel v-if="link.subMenu.length" :key="i">
            <v-expansion-panel-header>
              <div
                class="d-flex align-center"
                :class="{
                  'penel-header': link.subMenu.find(
                    (el) => el.route.name === $route.name
                  ),
                }"
              >
                <app-icon class="mr-3" :name="link.icon" :size="24" />
                <div class="icis-body-title">
                  {{ link.text }}
                </div>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="sub-menu__wrap">
                <nuxt-link
                  v-for="(subMenuItem, subIdx) in link.subMenu"
                  :key="subIdx"
                  exact-active-class="sub-menu__item_active"
                  :to="subMenuItem.route"
                  class="sub-menu__item icis-body-button"
                >
                  {{ subMenuItem.text }}
                </nuxt-link>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <nuxt-link
            v-else
            :key="i"
            class="menu-item icis-body-button d-flex align-center"
            :to="link.route"
          >
            <app-icon class="mr-3" :name="link.icon" :size="24" />
            <div class="icis-body-title">
              {{ link.text }}
            </div>
          </nuxt-link>
        </template>
      </v-expansion-panels>
    </v-navigation-drawer>

    <portal to="menu-nav">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="isDrawerVisible = !isDrawerVisible"
      />
    </portal>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isDrawerVisible: false,

      openedSubMenus: null,
    }
  },
  watch: {
    isDrawerVisible() {
      if (!this.isDrawerVisible) {
        this.openedSubMenus = null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .theme--light.v-expansion-panels .v-expansion-panel {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.7);
  }
  .theme--light.v-expansion-panels
    .v-expansion-panel-header
    .v-expansion-panel-header__icon
    .v-icon {
    color: rgba(255, 255, 255, 0.7);
  }
  .v-expansion-panels {
    justify-content: flex-start;
    flex-direction: column;
  }
  .v-expansion-panel-header {
    padding: 21px 20px;
  }
  // .v-expansion-panel-header--active {
  //   color: var(--v-dark-white-base);
  // }
  .v-expansion-panel-content__wrap {
    padding-left: 56px;
  }
}
.drawer-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.menu-item {
  padding: 21px 20px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}
.sub-menu__wrap {
  display: flex;
  flex-direction: column;
}
.sub-menu__item {
  text-decoration: none;
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  &:not(:last-child) {
    margin-bottom: 25px;
  }

  &_active {
    &:after {
      position: absolute;
      background-color: var(--v-dark-white-base);
      width: 100%;
      height: 1px;
      left: 0px;
      content: '';
      bottom: -3px;
    }
  }
}

.nuxt-link-active {
  color: var(--v-dark-white-base);
  // color: red;
}
.penel-header {
  color: var(--v-dark-white-base);
}
</style>
