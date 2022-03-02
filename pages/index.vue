<template>
  <div class="pages__index">
    <event-banner />
    <event-details />
    <merch-poster />
  </div>
</template>

<script lang="ts">
import { debounce } from "lodash";
import { Vue, Component } from "nuxt-property-decorator";
import EventBanner from "~/components/Widgets/EventBanner.vue";
import EventDetails from "~/components/Widgets/EventDetails.vue";
import MerchPoster from "~/components/Widgets/MerchPoster.vue";

@Component({
  components: {
    EventBanner,
    EventDetails,
    MerchPoster
  },
  head() {
    return {
      title: this.$t("pageTitle.home") as string
    };
  }
})
export default class PageIndex extends Vue {
  mounted() {
    this.$ga.enable();
    debounce(this.startAnalytics, 500);
  }

  async startAnalytics() {
    try {
      let i = await this.$ga.onAnalyticsReady();
      console.log(i);
      this.$ga.page(this.$route.name as string);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
