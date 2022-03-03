<template>
  <div class="components__rulesRegulation inner-section center-all flex-column">
    <p class="text-sm-h4 text-h6 text-center font-weight-black">
      Rules & Regulations
    </p>

    <v-list flat class="transparent center-all" max-width="700">
      <v-list-item class="mb-2">
        <v-list-item-icon class="d-flex my-auto">
          <v-icon color="black" x-small>mdi-circle</v-icon>
        </v-list-item-icon>
        All participants must be fully vaccinated and Digital Certificate must
        be presented via the MySejahtera application.
      </v-list-item>

      <v-list-item class="mb-2">
        <v-list-item-icon class="d-flex my-auto">
          <v-icon color="black" x-small>mdi-circle</v-icon>
        </v-list-item-icon>
        Participants are required to conduct a Covid19 self-test prior to
        attending the event. The test result are required to be presented during
        check-in.
      </v-list-item>

      <v-list-item>
        <v-list-item-icon class="d-flex my-auto">
          <v-icon color="black" x-small>mdi-circle</v-icon>
        </v-list-item-icon>
        Strictly no drugs and alcohol are allowed throughout the event.
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class RulesRegulation extends Vue {}
</script>

<style lang="scss" scoped></style>
