<template>
  <div class="components__sponsorWidget">
    <div class="d-flex flex-column align-center ml-auto pr-4 pb-12">
      <p class="text-caption">Official Sponsor</p>
      <v-img
        class="cursor-pointer"
        src="/logo/badzille_logo.svg"
        width="150px"
        alt="badzille"
        contain
        @click="goToLink('badzille')"
      />

      <p class="text-caption">Powered By</p>
      <v-img
        class="cursor-pointer"
        src="/logo/votafogo_logo.svg"
        width="150px"
        alt="votafogo"
        contain
        @click="goToLink('votafogo')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from "nuxt-property-decorator";

@Component({})
export default class SponsorWidget extends Vue {
  hover: Boolean = false;

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

<style lang="scss" scoped>
.components__sponsorWidget {
  display: flex;
  right: 0;
  bottom: 0;
  position: fixed;
}
</style>
