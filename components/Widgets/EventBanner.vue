<template>
  <div class="components__eventBanner center-all flex-column">
    <div class="inner-section content center-all flex-column">
      <img class="banner-img" :src="imageSrc" />
      <button-ticket />
    </div>
    <!-- <sponsor-card v-if="$vuetify.breakpoint.smAndDown" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ButtonTicket from "./ButtonTicket.vue";
import SponsorCard from "./SponsorCard.vue";

@Component({
  components: {
    ButtonTicket,
    SponsorCard
  }
})
export default class EventBanner extends Vue {
  get imageSrc() {
    if (this.$vuetify.breakpoint.smAndDown) {
      return "/images/poster-mobile.jpg";
    } else {
      return "/images/poster-web.jpg";
    }
  }
}
</script>

<style lang="scss" scoped>
.components__eventBanner {
  width: 100vw;
  height: 100vh;

  .black_container {
    background-color: #131313;
  }

  .banner-img {
    object-fit: contain;
    max-height: 70vh;
    max-width: 900px;
    margin-bottom: 24px;

    @media screen and(max-width: 600px) and (max-width: 960px) {
      max-width: 300px;
    }
  }

  .blur {
    backdrop-filter: blur(6px);
  }

  .content {
    width: 100vw;
    height: 100vh;
  }
}
</style>
