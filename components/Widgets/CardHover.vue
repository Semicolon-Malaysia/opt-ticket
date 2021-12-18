<template>
  <v-card
    ref="card"
    height="230px"
    class="pa-3 center-all cursor-pointer"
    outlined
    rounded="lg"
    :color="color"
    @mouseenter="onHover(1)"
    @mouseleave="onHover(0)"
  >
    <v-card-title class="pa-0 mb-2 center-all">{{ title }}</v-card-title>
    <slot name="default" />
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from "nuxt-property-decorator";

@Component({})
export default class CardHover extends Vue {
  @Prop({ required: true, type: String }) title!: String;

  color: String = "white";

  onHover(status: Number) {
    if (status == 1) {
      this.color = "pink";
    } else {
      this.color = "white";
    }
  }
}
</script>

<style lang="scss" scoped></style>
