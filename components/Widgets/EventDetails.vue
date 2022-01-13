<template>
  <div class="components__eventDetails my-0 my-sm-12">
    <div class="inner-section pa-0 pa-sm-12 text-center">
      <p class="text-sm-h5 error--text">DATE</p>
      <p class="text-h6 text-sm-h4 font-weight-black mb-sm-2">
        29 JANUARY 2022 (SATURDAY)
      </p>
      <p class="text-sm-h5 mb-12">5.00PM UNTIL MIDNIGHT</p>

      <p class="text-sm-h5 error--text">LOCATION</p>

      <p class="text-h6 text-sm-h4 font-weight-black mb-0">BSYNC PRODUCTION</p>
      <p class="text-sm-h6 text-center">
        No 26 Jalan Permai, Off, Jalan Robson, <br />
        Taman Persiaran Desa, <br />
        50460 Kuala Lumpur, <br />Wilayah Persekutuan Kuala Lumpur
      </p>

      <p class="text-subtitle-1 red--text">Get directions here:</p>

      <v-btn
        class="mr-2"
        color="white"
        fab
        href="https://goo.gl/maps/JPjHTHUDfZxqvtKZ9"
        target="/blank"
      >
        <v-icon large>mdi-google-maps</v-icon>
      </v-btn>

      <v-btn
        class="ml-2"
        color="white"
        fab
        href="https://goo.gl/maps/JPjHTHUDfZxqvtKZ9"
        target="/blank"
      >
        <v-icon large>mdi-waze</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class EventDetails extends Vue {}
</script>
