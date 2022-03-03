<template>
  <div class="pages__index">
    <event-banner />
    <event-details />
    <merch-poster />
    <rules-regulation />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { PageView } from "vue-gtag";
import EventBanner from "~/components/Widgets/EventBanner.vue";
import EventDetails from "~/components/Widgets/EventDetails.vue";
import MerchPoster from "~/components/Widgets/MerchPoster.vue";
import RulesRegulation from "~/components/Widgets/RulesRegulation.vue";

@Component({
  components: {
    EventBanner,
    EventDetails,
    MerchPoster,
    RulesRegulation
  },
  head() {
    return {
      title: this.$t("pageTitle.home") as string
    };
  }
})
export default class PageIndex extends Vue {
  mounted() {
    this.$nuxt.$gtag.pageview(this.$route as PageView);
  }
}
</script>
