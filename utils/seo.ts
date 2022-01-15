export const createSEOMeta = (data: any) => [
  { charset: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { hid: "og:title", property: "og:title", content: data.title },
  {
    hid: "og:description",
    property: "og:description",
    content: data.description || process.env.APP_META_DESCRIPTION
  },
  { hid: "og:image", property: "og:image", content: data.image },
  {
    hid: "og:url",
    property: "og:url",
    content: data.url
  },
  {
    hid: "twitter:card",
    name: "twitter:card",
    content: data.cardType || "summary_large_image"
  },
  {
    hid: "description",
    name: "description",
    content: process.env.APP_META_DESCRIPTION || ""
  }
];
