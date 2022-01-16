<template>
  <div class="components__eventBanner center-all">
    <div class="blur full-size">
      <div class="inner-section content center-all flex-column">
        <img class="banner-img" src="/images/finalposter-2.jpg" />
        <button-ticket />
      </div>
    </div>
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
  background: url("/images/finalposter-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  .banner-img {
    object-fit: contain;
    max-height: 70vh;
    max-width: 400px;
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
