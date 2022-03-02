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
        src="/logo/badzille_logo.svg"
        max-width="70"
        alt="badzille"
        contain
      />
    </div>

    <div class="d-flex flex-column justify-center align-center ml-6">
      <p class="text-caption">Powered By</p>
      <v-img
        src="/logo/votafogo_logo.svg"
        max-width="70"
        aspect-ratio="1"
        alt="badzille"
        contain
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class SponsorCard extends Vue {}
</script>

<style lang="scss" scoped></style>
