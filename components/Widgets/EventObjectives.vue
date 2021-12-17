<template>
  <div class="components__eventObjectives">
    <div class="inner-section">
      <p class="text-h4 text-center">WHAT WILL BE GOING ON?</p>

      <v-row>
        <v-col cols="12" sm="6">
          <v-card
            height="230px"
            class="pa-3 center-all"
            outlined
            rounded="lg"
            color="none"
          >
            <v-card-title class="pa-0 mb-2 center-all">
              PRODUCT LAUNCHING
            </v-card-title>

            <!-- <v-icon x-large>mdi-gift-open-outline</v-icon> -->

            <v-img
              src="/icons/gift-open-outline.svg"
              width="100"
              height="auto"
              class="d-flex mx-auto"
              contain
            />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-3" outlined rounded="lg" color="#ff2079">
            <v-card-title class="pa-0 mb-2 center-all">
              ANNIVERSARY CELEBRATION
            </v-card-title>

            <v-img
              src="/icons/balloon.svg"
              width="100"
              height="auto"
              class="d-flex mx-auto"
              contain
            />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-3" outlined rounded="lg" color="#ff2079">
            <v-card-title class="pa-0 mb-2 center-all">
              LIVE PRINTING
            </v-card-title>

            <v-img
              src="/icons/printer-3d-nozzle.svg"
              width="100"
              height="auto"
              class="d-flex mx-auto"
              contain
            />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-3" outlined rounded="lg" color="#ff2079">
            <v-card-title class="pa-0 mb-2 center-all">
              PRIVATE PARTY
            </v-card-title>

            <v-img
              src="/icons/music.svg"
              width="100"
              height="auto"
              class="d-flex mx-auto"
              contain
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class EventObjectives extends Vue {}
</script>

<style lang="scss" scoped></style>
