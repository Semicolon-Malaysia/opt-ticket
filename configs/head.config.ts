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
      title: "OPT Anniversary Party",
      description: "Join OPT in celebrating our 4th year anniversary.",
      image: "/images/finalposter-1.jpg" || "",
      url: "https://event.oneplustwo.my"
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
