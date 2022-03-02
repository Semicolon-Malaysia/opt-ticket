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
        @click="goToLink('https://www.instagram.com/badzillecrunch.hq/')"
      />

      <p class="text-caption">Powered By</p>
      <v-img
        class="cursor-pointer"
        src="/logo/votafogo_logo.svg"
        width="150px"
        alt="votafogo"
        contain
        @click="goToLink('https://www.instagram.com/fcvotafogo/')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from "nuxt-property-decorator";

@Component({})
export default class SponsorWidget extends Vue {
  hover: Boolean = false;

  goToLink(url: string) {
    window.open(url, "_blank");
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
