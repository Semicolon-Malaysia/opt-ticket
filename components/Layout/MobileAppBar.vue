<template>
  <div class="components__mobileAppBar mx-auto overflow-hidden">
    <v-app-bar dense flat color="white" fixed>
      <img src="/logo/logo-web.png" alt="Semicolon Malaysia" class="logo" />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="primary--text"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            @click.prevent="goToElement(item.to)"
            v-for="(item, index) in navMenu"
            :key="index"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class MobileAppBar extends Vue {
  drawer: Boolean = false;

  get navMenu() {
    return [
      {
        name: "home",
        title: this.$t("label.home"),
        to: "hero-container",
      },
      {
        name: "about-us",
        title: this.$t("label.aboutUs"),
        to: "about-us",
      },
      {
        name: "our-process",
        title: this.$t("label.ourProcess"),
        to: "dev-process",
      },
      {
        name: "our-services",
        title: this.$t("label.ourServices"),
        to: "our-services",
      },
      {
        name: "contact-us",
        title: this.$t("label.contactUs"),
        to: "contact-footer",
      },
    ];
  }

  goToElement(elem: string) {
    this.drawer = false;
    const el = document.getElementById(elem) as HTMLElement;
    this.$vuetify.goTo(el);
  }
}
</script>

<style lang="scss" scoped>
.components__mobileAppBar {
  .logo {
    width: 100px;
    height: auto;
    object-fit: contain;
  }
}
</style>
