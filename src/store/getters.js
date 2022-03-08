import { routes } from "@/router";

export default {
  permissions: (state) =>
    state.auth.permissions.filter((p) => !p.includes(":visit")),
  accessibleMenus: (state) => {
    const accessibleList = state.auth.permissions
      .filter((p) => p.includes(":visit"))
      .map((p) => p.split(":").shift());

    return routes.filter(
      (r) => (r.meta && r.meta.public) || accessibleList.includes(r.path)
    );
  },
};
