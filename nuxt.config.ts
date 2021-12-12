import {
  build,
  buildModules,
  css,
  googleAnalytics,
  head,
  i18n,
  loading,
  modules,
  plugins,
  privateRuntimeConfig,
  proxy,
  publicRuntimeConfig,
  router,
  server,
  toast,
  vuetify
} from "./configs";

import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  target: "server",
  ssr: false,
  build,
  buildModules,
  components: true,
  css,
  googleAnalytics,
  head,
  i18n,
  loading,
  modules,
  plugins,
  vuetify,
  privateRuntimeConfig,
  proxy,
  publicRuntimeConfig,
  router,
  server,
  toast
};

export default config;
