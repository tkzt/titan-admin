const state = () => ({
  notification: { show: false, content: "", loading: false, level: "" },
  loading: { show: false, progress: 0 },
  navDrawer: true,
  clipped: false,
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
