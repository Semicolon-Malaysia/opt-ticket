<template>
  <v-app>
    <v-main>
      <body>
        <sponsor-widget v-if="$vuetify.breakpoint.mdAndUp" />
        <nuxt />
        <layout-footer />
      </body>
    </v-main>

    <v-footer absolute app color="#eeeeee" v-if="$vuetify.breakpoint.mdAndUp">
      <span class="text-caption full-width text-center black--text">
        &copy;
        {{
          new Date().getFullYear() +
            " SVG X OPT Against The World - Developed by Semicolon Malaysia"
        }}
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import LayoutFooter from "~/components/Layout/LayoutFooter.vue";
import SponsorWidget from "~/components/Widgets/SponsorWidget.vue";

@Component({
  components: {
    LayoutFooter,
    SponsorWidget
  }
})
export default class LayoutDefault extends Vue {}
</script>
