<template>
  <div class="components__eventObjectives inner-section">
    <p class="text-h5 error--text text-center font-weight-black">
      RULES AND REGULATIONS
    </p>

    <v-list
      class="transparent white--text d-flex mx-auto flex-column"
      max-width="500"
    >
      <v-list-item
        class="white--text center-all"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-list-item-icon>
          <v-icon color="error" x-small>mdi-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          {{ item.text }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import CardHover from "./CardHover.vue";

@Component({
  components: {
    CardHover
  }
})
export default class EventObjectives extends Vue {
  items: Array<Object> = [
    {
      text:
        "All participants must be fully vaccinated and Digital Certificate must be presented via MySejahtera app."
    },
    { text: "All participants must be above 18 years old." },
    { text: "Strictly no drugs and alcohol throughout the event." },
    { text: "No food and drinks are allowed in the event hall." },
    { text: "Carpool or E-Hailing is preferred." },
    {
      text:
        "Covid test kit will be provided for all participants before the event."
    }
  ];
}
</script>

<style lang="scss" scoped></style>
