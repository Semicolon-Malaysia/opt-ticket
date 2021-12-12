import { NuxtConfig } from "@nuxt/types";

export const publicRuntimeConfig: NuxtConfig["publicRuntimeConfig"] = {
  emailjs_service_id: process.env.EMAILJS_SERVICE_ID,
  emailjs_template_id: process.env.EMAILJS_TEMPLATE_ID
};
