import { NuxtConfig } from "@nuxt/types";
import { createSEOMeta } from "../utils/seo";

require("dotenv").config();

export const head: NuxtConfig["head"] = {
  titleTemplate: (titleChunk: String) => {
    return titleChunk
      ? `${titleChunk} - ${process.env.APP_NAME}`
      : `${process.env.APP_NAME}` || "";
  },
  meta: [
    ...createSEOMeta({
      title: "SVG X OPT - Against The World",
      description:
        "Limited to 400 tickets only. Price starts at RM49. See you there!",
      image: "/images/poster_1.jpg" || "",
      url: "https://event.oneplustwo.my"
    })
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.svg"
    }
  ]
};
