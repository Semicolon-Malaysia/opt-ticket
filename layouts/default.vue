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
        {{
          new Date().getFullYear() +
            ` OPT Malaysia - Created by Semicolon Malaysia`
        }}
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
