import { NuxtConfig } from "@nuxt/types";

export const googleAnalytics: NuxtConfig["googleAnalytics"] = {
  id: process.env.GOOGLE_ANALYTICS_ID || "",
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
