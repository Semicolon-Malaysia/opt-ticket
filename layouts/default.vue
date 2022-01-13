<template>
  <v-app>
    <v-main>
      <body>
        <nuxt />
        <layout-footer />
      </body>
    </v-main>

    <v-footer absolute app color="black">
      <span class="text-caption full-width text-center white--text">
        &copy;
        {{ new Date().getFullYear() + ` - One Plus Two Malaysia` }}
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import LayoutFooter from "~/components/Layout/LayoutFooter.vue";

@Component({
  components: {
    LayoutFooter
  }
})
export default class LayoutDefault extends Vue {}
</script>
