<template>
  <div class="components__eventObjectives my-12">
    <div class="inner-section">
      <p class="text-h4 my-12 text-center font-weight-black">
        WHAT WILL BE GOING ON?
      </p>

      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6">
          <card-hover :title="item.title">
            <template slot="default">
              <div class="center-all">
                <v-img :src="item.img" width="auto" height="150" contain />
              </div>
            </template>
          </card-hover>
          <!-- 
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


            <v-img
              src="/icons/gift-open-outline.svg"
              width="100"
              height="auto"
              class="d-flex mx-auto"
              contain
            />
          </v-card> -->
        </v-col>
      </v-row>
    </div>
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
      title: "PRODUCT LAUNCHING",
      img: "/icons/gift-open-outline.svg"
    },
    {
      title: "ANNIVERSARY CELEBRATION",
      img: "/icons/balloon.svg"
    },
    {
      title: "LIVE PRINTING",
      img: "/icons/printer-3d-nozzle.svg"
    },
    {
      title: "PRIVATE PARTY",
      img: "/icons/music.svg"
    }
  ];
}
</script>

<style lang="scss" scoped></style>
