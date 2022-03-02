<template>
  <div class="components__eventDetails inner-section text-center">
    <sponsor-card v-if="$vuetify.breakpoint.smAndDown" />
    <p class="text-sm-h5 font-weight-bold">DATE</p>
    <p class="text-h6 text-sm-h4 font-weight-black mb-sm-2">
      19 MARCH 2022 (SATURDAY)
    </p>
    <p class="text-sm-h5 mb-12">5.00PM UNTIL 11.30PM</p>

    <p class="text-sm-h5 font-weight-bold">LOCATION</p>

    <p class="text-h6 text-sm-h4 font-weight-black mb-0">
      RKS SPORTS CENTER
    </p>
    <p class="text-sm-h6 text-center">
      EV-T-01, 3rd Floor @ Evolve Concept Mall, <br />
      alan PJU 1a/4, Ara Damansara, <br />
      47301 Petaling Jaya, Selangor.
    </p>

    <div class="my-10">
      <v-btn
        class="mr-2"
        color="white"
        fab
        href="https://goo.gl/maps/FWua2RLtKHhsixJM7"
        target="/blank"
      >
        <v-icon large>mdi-google-maps</v-icon>
      </v-btn>

      <v-btn
        class="ml-2"
        color="white"
        fab
        href="https://waze.com/ul/hw281xwjh9"
        target="/blank"
      >
        <v-icon large>mdi-waze</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import SponsorCard from "./SponsorCard.vue";

@Component({
  components: {
    SponsorCard
  }
})
export default class EventDetails extends Vue {}
</script>
