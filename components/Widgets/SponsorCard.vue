<template>
  <v-card
    class="components__sponsorCard mb-12 d-inline-flex"
    color="transparent"
    flat
  >
    <div class="d-flex flex-column align-center mr-6">
      <p class="text-caption">
        Official Sponsor
      </p>
      <v-img
        class="cursor-pointer"
        src="/logo/badzille_logo.svg"
        max-width="120"
        alt="badzille"
        contain
        @click="goToLink('badzille')"
      />
    </div>

    <div class="d-flex flex-column justify-center align-center ml-6">
      <p class="text-caption">Powered By</p>
      <v-img
        class="cursor-pointer"
        src="/logo/votafogo_logo.svg"
        max-width="120"
        aspect-ratio="1"
        alt="badzille"
        contain
        @click="goToLink('votafogo')"
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class SponsorCard extends Vue {
  goToLink(name: string) {
    this.trackEvent(name);
    if (name == "badzille") {
      window.open("https://www.instagram.com/badzillecrunch.hq/", "_blank");
      this.$gtag.linker({
        domains: ["https://www.instagram.com/badzillecrunch.hq/"]
      });
    } else if (name == "votafogo") {
      window.open("https://www.instagram.com/fcvotafogo/", "_blank");
      this.$gtag.linker({ domains: ["https://www.instagram.com/fcvotafogo/"] });
    }
  }

  trackEvent(name: String) {
    this.$gtag.event(`open_${name}_ig`, {
      event_category: "view",
      event_label: `view_${name}`
    });
  }
}
</script>

<style lang="scss" scoped></style>
