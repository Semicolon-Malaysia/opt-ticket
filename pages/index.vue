<template>
  <div class="pages__index">
    <event-banner />
    <event-details />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import EventBanner from "~/components/Widgets/EventBanner.vue";
import EventDetails from "~/components/Widgets/EventDetails.vue";

@Component({
  components: {
    EventBanner,
    EventDetails
  },
  head() {
    return {
      title: this.$t("pageTitle.home") as string
    };
  }
})
export default class PageIndex extends Vue {}
</script>
