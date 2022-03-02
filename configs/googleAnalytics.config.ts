import { NuxtConfig } from "@nuxt/types";

export const googleAnalytics: NuxtConfig["googleAnalytics"] = {
  id: "UA-215645516-1",
  autoTracking: {
    screenview: true,
    page: true,
    skipSamePath: true,
    transformQueryString: false,
    shouldRouterUpdate: (to: any, from: any) => {
      return (to.path !== from.path).toString();
    }
  }
};
