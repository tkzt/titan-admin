import { createStore } from "vuex";
import getters from "./getters";

const modules = import.meta.globEager("./modules/*.js");

export default createStore({
  getters,
  modules: Object.entries(modules).reduce(
    (pre, [path, module]) => ({
      ...pre,
      [path.replace(/\.\/modules\/(.*?)\.js/, "$1")]: module.default,
    }),
    {}
  ),
});
