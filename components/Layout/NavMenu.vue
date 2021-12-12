<template>
  <v-menu class="components__navMenu" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon color="primary" v-on="on">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in navMenu"
        :key="index"
        class="center-all"
        @click.prevent="goToElement(item.to)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class NavMenu extends Vue {
  get navMenu() {
    return [
      {
        name: "home",
        title: this.$t("label.home"),
        icon: "mdi-home-variant-outline",
        to: "hero-container",
      },
      {
        name: "about-us",
        title: this.$t("label.aboutUs"),
        icon: "mdi-account-group-outline",
        to: "about-us",
      },
      {
        name: "our-process",
        title: this.$t("label.ourProcess"),
        icon: "mdi-arrow-decision-outline",
        to: "dev-process",
      },
      {
        name: "our-services",
        title: this.$t("label.ourServices"),
        icon: "mdi-gesture-double-tap",
        to: "our-services",
      },
    ];
  }

  goToElement(elem: string) {
    const el = document.getElementById(elem) as HTMLElement;
    this.$vuetify.goTo(el);
  }
}
</script>