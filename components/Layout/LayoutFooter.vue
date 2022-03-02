<template>
  <div class="components__layoutFooter pb-12">
    <v-row class="inner-section mx-auto ma-0" align="center" justify="center">
      <v-col cols="12" sm="6" md="4" class="d-flex align-center flex-column">
        <p>Event Organizer</p>
        <a
          href="https://www.facebook.com/atasangin.ev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logo/atasangin-black.svg"
            width="150"
            height="auto"
            contain
            alt="Atas Angin"
            class="center-all"
          />
        </a>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="d-flex align-center flex-column">
        <p>Technology Partner</p>
        <a
          href="http://semicolon.com.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logo/semicolon_dark.svg"
            width="250"
            height="auto"
            contain
            alt="Atas Angin"
            class="center-all "
          />
        </a>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="d-flex align-center flex-column">
        <p>Media Partner</p>
        <a
          href="https://www.instagram.com/masamag.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logo/masa-logo.svg"
            width="250"
            height="auto"
            contain
            alt="Atas Angin"
            class="center-all "
          />
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import SocialShare from "../Widgets/SocialShare.vue";

@Component({
  components: {
    SocialShare
  }
})
export default class LayoutFooter extends Vue {
  get socialShare() {
    return {};
  }
  get sitemap() {
    return [
      {
        title: this.$t("pageTitle.home"),
        to: this.localePath({ name: "index" }),
        slug: "home",
        type: "navMenu"
      },
      {
        title: this.$t("pageTitle.aboutUs"),
        to: this.localePath({ name: "aboutUs" }),
        slug: "about-us",
        type: "navMenu"
      },
      {
        title: this.$t("label.ourServices"),
        to: this.localePath({ name: "services" }),
        slug: "our-services",
        type: "navMenu"
      },
      {
        title: this.$t("label.portfolio"),
        to: this.localePath({ name: "portfolio" }),
        slug: "portfolio",
        type: "navMenu"
      },
      {
        title: this.$t("label.contactUs"),
        to: this.localePath({ name: "contactUs" }),
        slug: "contactUs",
        type: "button"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__layoutFooter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  // bottom: 0;
  // position: absolute;
  background: #eeeeee;

  .sitemap {
    display: flex;
    flex-direction: column;

    .clear-link-format {
      color: #fff;
      text-decoration: none;
    }
  }
  .share-network {
    text-decoration: none !important;
    .social-share {
      color: #fff;
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
