<template>
  <div class="pages__index">
    <event-banner />
    <event-details />
    <event-objectives />
    <eventbrite-widget />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import EventBanner from "~/components/Widgets/EventBanner.vue";
import EventbriteWidget from "~/components/Widgets/EventbriteWidget.vue";
import EventDetails from "~/components/Widgets/EventDetails.vue";
import EventObjectives from "~/components/Widgets/EventObjectives.vue";

@Component({
  components: {
    EventBanner,
    EventDetails,
    EventObjectives,
    EventbriteWidget
  },
  head() {
    return {
      title: this.$t("pageTitle.home") as string
    };
  }
})
export default class PageIndex extends Vue {}
</script>
