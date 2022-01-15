<template>
  <div class="components__artistLineup center-all flex-column">
    <p
      class="text-sm-h5 text-uppercase text-center font-weight-bold error--text"
    >
      Artists Line Up
    </p>
    <div class="lineup">
      <p
        class="white--text font-weight-black text-center text-uppercase text-h4"
        v-for="(artist, index) in artist"
        :key="index"
      >
        {{ artist }}
      </p>
    </div>
    <p></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class ArtistLineup extends Vue {
  artist: Array<String> = [
    "Gard Wuzgut ",
    "Force Park Bois ",
    "Chronicalz ",
    "53STU ",
    "Ilyas Konlay feat. Lucid Rari ",
    "Afikuraji ",
    "MB Nikz ",
    "DC Willie"
  ];
}
</script>

<style lang="scss" scoped>
.components__artistLineup {
  margin: 70px 0px;
  .lineup {
    max-width: 700px;
  }
}
</style>
