<template>
  <div class="components__eventBanner">
    <div class="inner-section">
      <img alt="logo" class="opt-logo" src="/logo/opt-logo-white.svg" />
      <p
        class="white--text text-h5 text-md-h4 text-center text-uppercase font-weight-bold"
      >
        Anniversary Party
      </p>

      <p class="text-h6 text-md-h5 text-center mt-12">
        JOIN US IN CELEBRATING OPT'S <br />
        4TH YEAR ANNIVERSARY
      </p>

      <v-btn icon x-large color="white" class="d-flex mx-auto">
        <v-icon x-large>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
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
  background: url("/images/banner.jpg") rgba(0, 0, 0, 0.42);
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .opt-logo {
    max-width: 500px;
    height: auto;
    object-fit: contain;
  }
}
</style>
