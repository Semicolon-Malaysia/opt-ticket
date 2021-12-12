<template>
  <div class="components__eventBanner">
    <div class="my-12">
      <img alt="logo" class="opt-logo" src="/logo/opt-logo-white.svg" />
      <p class="white--text text-h4 text-uppercase font-weight-bold">
        Anniversary Party
      </p>
    </div>

    <v-row class="full-width ma-0">
      <v-col cols="12" md="6" class="d-flex align-center flex-column">
        <p>DATE</p>
        <p class="text-h6 font-weight-black">29 JANURAY 2022 (SATURDAY)</p>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center flex-column">
        <p>LOCATION</p>

        <p class="text-h6 font-weight-black mb-0">BSYNC PRODUCTION</p>
        <p class="text-caption text-center">
          No 26 Jalan Permai, Off, Jalan Robson, <br />
          Taman Persiaran Desa, <br />
          50460 Kuala Lumpur, <br />Wilayah Persekutuan Kuala Lumpur
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class EventBanner extends Vue {}
</script>

<style lang="scss" scoped>
.components__eventBanner {
  height: 100vh;
  background-image: url("/images/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .opt-logo {
    max-width: 500px;
    height: auto;
    object-fit: contain;
  }

  .banner-image {
    width: 100vw;
    height: 500px;
    // background-image: url("images/banner.jpg");
  }
}
</style>
