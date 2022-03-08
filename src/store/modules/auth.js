const state = () => ({
  permissions: [
    "/dashboard:visit",
    "/tree/levels/demo:visit",
    "/tree/levels-another/demo:visit",
    "/system/user-management:visit",
    "/system/role-management:visit",
    "user:retrieve",
    "user:create",
    "user:update",
    "user:delete",
    "role:retrieve",
    "role:create",
    "role:update",
    "role:delete",
  ],
});

const mutations = {
  SET_NOTIFICATION: (state, notification) => {
    state.notification = { ...notification };
  },
  SET_LOADING: (state, loading) => {
    state.loading = { ...loading };
  },
  SET_NAV_DRAWER: (state, navDrawer) => {
    state.navDrawer = navDrawer;
  },
  SET_CLIPPED: (state, clipped) => {
    state.clipped = clipped;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
