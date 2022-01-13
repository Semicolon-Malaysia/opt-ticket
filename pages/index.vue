<template>
  <div class="pages__index">
    <event-banner />
    <event-details />
    <artist-lineup />
    <merch-poster />
    <event-objectives />
    <!-- <eventbrite-widget /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ArtistLineup from "~/components/Widgets/ArtistLineup.vue";
import EventBanner from "~/components/Widgets/EventBanner.vue";
import EventbriteWidget from "~/components/Widgets/EventbriteWidget.vue";
import EventDetails from "~/components/Widgets/EventDetails.vue";
import EventObjectives from "~/components/Widgets/EventObjectives.vue";
import MerchPoster from "~/components/Widgets/MerchPoster.vue";

@Component({
  components: {
    ArtistLineup,
    EventBanner,
    EventDetails,
    EventObjectives,
    EventbriteWidget,
    MerchPoster
  },
  head() {
    return {
      title: this.$t("pageTitle.home") as string
    };
  }
})
export default class PageIndex extends Vue {}
</script>
