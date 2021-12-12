<template>
  <div class="components__eventDetails">
    <div class="mb-12 center-all flex-column">
      <p>DATE</p>
      <p class="text-h6 font-weight-black">29 JANURAY 2022 (SATURDAY)</p>
    </div>

    <div class="mb-4 center-all flex-column">
      <p>LOCATION</p>

      <p class="text-h6 font-weight-black mb-0">BSYNC PRODUCTION</p>
      <p class="text-caption text-center">
        No 26 Jalan Permai, Off, Jalan Robson, <br />
        Taman Persiaran Desa, <br />
        50460 Kuala Lumpur, <br />Wilayah Persekutuan Kuala Lumpur
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class EventDetails extends Vue {}
</script>

<style lang="scss" scoped>
.components__eventDetails {
}
</style>
