import { NuxtConfig } from "@nuxt/types";
import { createSEOMeta } from "../utils/seo";

require("dotenv").config();

export const head: NuxtConfig["head"] = {
  titleTemplate: (titleChunk: String) => {
    return titleChunk
      ? `${titleChunk} - ${process.env.APP_NAME}`
      : `${process.env.APP_NAME} - One Plus Two Malaysia` || "";
  },
  meta: [
    ...createSEOMeta({
      title: "",
      description: "",
      image: "/og-image.png" || ""
    })
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo/opt-logo-black.svg"
    }
  ]
};
