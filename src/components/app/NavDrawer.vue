<template>
  <v-navigation-drawer
    :mini-variant="mini"
    app
    :clipped="clipped"
    v-model="navDrawer"
    :theme="theme"
    :color="!clipped ? (dark ? '#1e1e1e' : '#17263d') : ''"
  >
    <template #prepend v-if="!clipped">
      <v-list-item>
        <v-list-item-icon>
          <v-img
            max-width="24"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg"
          ></v-img>
        </v-list-item-icon>
        <v-list-item-content class="text-h6"> Titan Admin </v-list-item-content>
      </v-list-item>
      <v-divider class="my-1" />
    </template>
    <v-list nav>
      <template v-for="item in menus.sort((a, b) => a.order - b.order)">
        <v-list-item :to="item.path">
          <v-list-item-icon v-if="!mini">
            <v-icon :icon="item.meta.icon"></v-icon>
          </v-list-item-icon>
          <tailed-tooltip v-else right>
            <template #activator="{ attrs, on }">
              <v-list-item-icon v-on="on" v-bind="attrs">
                <v-icon :icon="item.meta.icon"></v-icon>
              </v-list-item-icon>
            </template>
            <span> {{ item.name }} </span>
          </tailed-tooltip>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <!-- lg、xl 时 nav drawer 固定在左侧，此时提供折叠功能 -->
    <template #append class="d-none">
      <div class="d-none d-lg-block d-xl-block">
        <v-divider />
        <v-btn block @click="mini = !mini" text>
          <v-icon>{{
            mini ? "mdi-chevron-double-right" : "mdi-chevron-double-left"
          }}</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore, mapState } from "vuex";
import { useTheme } from "vuetify";
import TailedTooltip from "@/components/TailedTooltip.vue";

const mini = ref(false);
const store = useStore();
const clipped = computed(() => store.state.app.clipped);
const menus = computed(() => store.getters.accessibleMenus);
const theme = computed(() => useTheme().current.value);
const navDrawer = computed({
  set(val) {
    store.commit("app/SET_NAV_DRAWER", val);
  },
  get() {
    return store.state.app.navDrawer;
  },
});
</script>
