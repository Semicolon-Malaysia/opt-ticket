<template>
  <div class="components__socialShare d-flex align-start">
    <template v-for="(item, index) in socialShare">
      <ShareNetwork
        :key="index"
        :network="item.network"
        :url="sharing.url"
        :title="sharing.title"
        :description="sharing.description"
        :quote="sharing.quote"
        :hashtags="sharing.hashtags"
        class="share-network mr-2"
      >
        <div class="social-share">
          <v-icon color="white" v-text="item.icon" />
          <!-- <span class="text-center">{{ item.name }}</span> -->
        </div>
      </ShareNetwork>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class SocialShare extends Vue {
  sharing: Object = {
    url: "https://semicolon.com.my",
    title:
      "Looking for custom solutions for your ever-growing business? We provide various IT services that will cater to your smallest business needs.",
    quote: "Experience a seamless digital transformation for your business.",
    hashtags: "SemicolonMalaysia,semicolonmy"
  };
  get socialShare() {
    return [
      {
        network: "twitter",
        name: "Twitter",
        icon: "mdi-twitter",
        color: "#1da1f2"
      },
      {
        network: "facebook",
        name: "Facebook",
        icon: "mdi-facebook",
        color: "#1877f2"
      },
      {
        network: "whatsapp",
        name: "Whatsapp",
        icon: "mdi-whatsapp",
        color: "#25d366"
      },
      {
        network: "linkedin",
        name: "LinkedIn",
        icon: "mdi-linkedin",
        color: "#007bb5"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__socialShare {
  .share-network {
    margin-bottom: 8px;
    padding: 4px 8px;
    border: #fff 1px solid;
    border-radius: 6px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none !important;
    .social-share {
      color: #fff;
      display: flex;
      justify-content: center;
      span {
        font-size: 12px;
        font-weight: 100 !important;
      }
      v-icon {
        padding: 4px;
      }
    }
  }
}
</style>
