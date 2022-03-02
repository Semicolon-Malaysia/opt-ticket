<template>
  <div class="components__merchPoster center-all flex-column inner-section">
    <v-img
      src="/images/seat_chart.jpg"
      :width="$vuetify.breakpoint.smAndDown ? '80%' : '800'"
      contain
      class="d-flex mx-auto mb-4"
    />
    <p class="text-center text-subtitle-2">
      Tickets are categorized by seating area. <br />
      On the event day, you may choose your seat randomly <br />within the
      seating area that you have chosen.
    </p>

    <button-ticket />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ButtonTicket from "./ButtonTicket.vue";

@Component({
  components: {
    ButtonTicket
  }
})
export default class MerchPoster extends Vue {}
</script>
