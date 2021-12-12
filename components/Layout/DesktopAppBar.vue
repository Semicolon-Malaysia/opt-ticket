<template>
  <v-app-bar class="components__desktopAppBar" flat color="white" app fixed>
    <div class="app-bar">
      <div
        class="cursor-pointer"
        @click.prevent="goToElement('hero-container')"
      >
        <img
          src="/logo/opt-logo-black.svg"
          class="center-all"
          alt="Semicolon Malaysia"
          style="
            max-width: 150px;
            width: auto;
            height: 30px;
            object-fit: contain;
          "
        />
      </div>

      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-list flat class="d-flex" width="600">
          <v-list-item
            class="center-all primary--text rounded-pill"
            link
            :key="index"
            v-for="(item, index) in navMenu"
            :to="item.to"
            >{{ item.title }}</v-list-item
          >
        </v-list>

        <v-btn
          rounded
          small
          :icon="$vuetify.breakpoint.smAndDown"
          color="primary"
          :to="localePath({ name: 'contactUs' })"
        >
          <v-icon v-if="$vuetify.breakpoint.smAndDown">mdi-email</v-icon>
          <span v-else>{{ $t("label.contactUs") }} </span>
        </v-btn>
      </template>

      <template v-else>
        <nav-menu />
      </template>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import NavMenu from "./NavMenu.vue";

@Component({
  components: {
    NavMenu
  }
})
export default class DesktopAppBar extends Vue {
  get headerImage() {
    return this.$vuetify.breakpoint.smAndDown
      ? "/logo/semicolon_dark_logo.svg"
      : "/logo/semicolon_dark.svg";
  }

  get navMenu() {
    return [
      {
        name: "home",
        title: this.$t("label.home"),
        to: this.localePath({ name: "index" })
      },
      {
        name: "about-us",
        title: this.$t("label.aboutUs"),
        to: this.localePath({ name: "aboutUs" })
      },
      // {
      //   name: "our-process",
      //   title: this.$t("label.ourProcess"),
      //   to: this.localePath({ name: "devProcess" }),
      // },
      {
        name: "our-services",
        title: this.$t("label.ourServices"),
        to: this.localePath({ name: "services" })
      },
      {
        name: "portfolio",
        title: this.$t("label.portfolio"),
        to: this.localePath({ name: "portfolio" })
      }
    ];
  }

  goToElement(elem: string) {
    const el = document.getElementById(elem) as HTMLElement;
    this.$vuetify.goTo(el);
  }
}
</script>

<style lang="scss" scoped>
.components__desktopAppBar {
  padding: 0 12px;

  .app-bar {
    max-width: 1900px;
    margin: 0 auto !important;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>
