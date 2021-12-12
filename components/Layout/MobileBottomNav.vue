<template>
  <v-bottom-navigation
    app
    fixed
    height="45"
    class="components__mobileBottomNav rounded-t-xl primary"
    color="white"
  >
    <v-bottom-sheet v-model="navSheet">
      <template v-slot:activator="{ on }">
        <div class="full-width center-all" v-on="on">
          <v-icon color="white">mdi-menu</v-icon>
        </div>
      </template>

      <v-sheet class="rounded-t-xl" height="auto">
        <v-toolbar
          height="45"
          flat
          class="primary rounded-t-xl"
          @click="navSheet = false"
        >
          <v-icon color="white" class="d-flex mx-auto">mdi-chevron-down</v-icon>
        </v-toolbar>

        <v-row class="py-2">
          <v-col cols="6" v-for="(item, index) in navMenu" :key="index">
            <div
              class="center-all flex-column"
              @click.prevent="goToElement(item.to)"
            >
              <v-icon large>{{ item.icon }}</v-icon>
              <p class="text-uppercase mb-0 text-caption">{{ item.title }}</p>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-bottom-sheet>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class MobileBottomNav extends Vue {
  navSheet: boolean = false;

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
    this.navSheet = false;
  }
}
</script>

<style lang="scss" scoped>
.components__mobileBottomNav {
  .nav-sheet {
    .nav-sheet-header {
      position: relative;
      top: 0;
      height: 45px;
      width: 100%;
      background-color: #194da3;
      border-radius: 25px 12x 25px 12px;
    }
  }
}
</style>
