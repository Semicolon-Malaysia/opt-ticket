<template>
  <div class="components__layoutFooter">
    <v-row class="inner-section mx-auto">
      <v-col cols="12" sm="6" class="d-flex align-center flex-column">
        <p>Organized by:</p>
        <img
          src="/logo/atas-angin-logo.jpg"
          width="150"
          height="auto"
          contain
          alt="Atas Angin"
          class="mb-3 d-flex ml-0"
        />
      </v-col>

      <v-col cols="12" sm="6" class="d-flex align-center flex-column">
        <p>Tech by:</p>
        <img
          src="/logo/semicolon_light.svg"
          width="250"
          height="auto"
          contain
          alt="Atas Angin"
          class="mb-3 d-flex"
        />
      </v-col>
    </v-row>
    <!-- <v-row class="inner-section mx-auto">
      <v-col cols="12" sm="3">
        <img
          src="/logo/semicolon_light.svg"
          width="auto"
          height="30"
          contain
          alt="Semicolon Malaysia"
          class="mb-3 d-flex ml-0"
        />

        <v-card
          flat
          tile
          color="transparent"
          class="white--text d-flex flex-column"
        >
          <p class="text-body-1 mb-0">Semicolon Malaysia Ent.</p>
          <p class="text-caption accent--text">202103247429 (003309851-P)</p>
          <div class="d-inline-flex align-center mb-2">
            <v-icon color="#def6fe" class="mr-2">mdi-email</v-icon>
            <a
              href="mailto:hello@semicolon.com.my"
              class="text-decoration-none white--text text-body-2"
            >
              hello@semicolon.com.my
            </a>
          </div>

          <div class="d-inline-flex align-center">
            <v-icon color="#def6fe" class="mr-2">mdi-phone</v-icon>
            <a
              href="tel:+601111283226"
              class="text-decoration-none white--text text-body-2"
            >
              +60 11 - 1128 3226
            </a>
          </div>
        </v-card>
      </v-col>

      <v-spacer />

      <v-col cols="12" sm="2">
        <p class="text-body-1 accent--text mb-0">
          {{ $t("label.sitemap") }}
        </p>
        <div class="sitemap">
          <a
            v-for="(item, index) in sitemap"
            :key="index"
            :href="item.to"
            class="clear-link-format font-weight-light"
          >
            {{ item.title }}
          </a>
        </div>
      </v-col>
      <v-col cols="12" sm="3">
        <p class="text-body-1 accent--text">
          {{ $t("label.shareOnSocialMedia") }}
        </p>
        <social-share />
      </v-col>
    </v-row> -->
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
  padding: 36px 0 !important;
  width: 100vw;
  height: auto;
  // bottom: 0;
  // position: absolute;
  background: black;

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
