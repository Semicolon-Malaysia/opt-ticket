<template>
  <h1 class="components__pageTitle text-h4 font-weight-black text-center mb-5">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class PageTitle extends Vue {
  @Prop({ required: true, type: String }) title!: string;
}
</script>
