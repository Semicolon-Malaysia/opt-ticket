<template>
  <div
    class="components__eventBanner"
    :class="$vuetify.breakpoint.smAndUp ? 'center-all' : null"
  >
    <v-row class="inner-section ma-0" align-content="center">
      <v-col cols="12" sm="6" class="center-all">
        <v-img
          src="/images/finalposter-1.jpg"
          :width="$vuetify.breakpoint.xsOnly ? '80%' : '100%'"
          height="auto"
          contain
          class="center-all mb-4 mb-sm-0"
        />
      </v-col>

      <v-col cols="12" sm="6" class="center-all flex-column">
        <img alt="logo" class="opt-logo" src="/logo/opt-logo-white.svg" />
        <p
          class="white--text text-h6 text-md-h5 text-center text-uppercase font-weight-bold"
        >
          Anniversary Party
        </p>
        <p class="text-h6 text-md-h5 text-center mt-12">
          JOIN US IN CELEBRATING OPT'S <br />
          4TH YEAR ANNIVERSARY
        </p>

        <button-ticket />
      </v-col>
    </v-row>
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
export default class EventBanner extends Vue {}
</script>

<style lang="scss" scoped>
.components__eventBanner {
  @media screen and(min-width: 601px) and (max-width: 960px) {
    height: 70vh;
  }
  height: 100vh;
  width: 100vw;

  .opt-logo {
    width: 250px;
    height: auto;
    object-fit: contain;
  }
}
</style>
