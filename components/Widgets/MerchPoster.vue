<template>
  <div class="components__merchPoster">
    <v-img
      src="/images/merch.jpg"
      :width="$vuetify.breakpoint.xsOnly ? '80%' : '500'"
      height="auto"
      contain
      class="d-flex mx-auto mb-4"
    />
    <p class="text-center text-subtitle-2">
      Anniversary merchandise are available as add-ons <br />
      when you purchase the ticket.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class MerchPoster extends Vue {}
</script>

<style lang="scss" scoped>
.components__merchPoster {
  margin-bottom: 70px;
}
</style>
