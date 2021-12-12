<template>
  <div class="components__heroSection bg--gradient">
    <page-title :title="$t('pageTitle.home')" class="d-none" />

    <div class="inner-section full-size">
      <v-row class="ma-0 full-size" align="center">
        <v-col cols="12" sm="6" align-self="center">
          <div class="primary--text">
            <h1 class="connect font-weight-black mb-sm-1 text-h4 text-md-h2">
              {{ $t("label.connecting") }}
            </h1>

            <h1 class="reveal font-weight-bold mb-sm-2 text-h6 text-md-h4">
              <span>
                {{ $t("message.yourBusinessToTheWorld") }}
              </span>
            </h1>

            <p
              class="secondary--text text-body-2 text-sm-body-1 mb-10"
              style="max-width: 400px"
            >
              {{ $t("message.weOfferVariousItSolutions") }}
            </p>
          </div>

          <v-btn
            @click.prevent="scrollDown"
            class="mr-auto"
            :small="$vuetify.breakpoint.xsOnly"
            rounded
            depressed
            color="primary"
            append
          >
            {{ $t("label.moreAboutUs") }}
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <img
            src="/vector-2.svg"
            alt="hero-image"
            height="auto"
            style="object-fit: contain"
            width="auto"
          />
        </v-col>
      </v-row>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#cfd9df"
        fill-opacity="1"
        d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  components: {
    PageTitle
  }
})
export default class HeroSection extends Vue {}
</script>

<style lang="scss" scoped>
.components__heroSection {
  @media (max-width: 600px) {
    height: 75vh;
  }

  @media (min-width: 600px) {
    height: 60vh;
  }

  .connect {
    animation: showup 10s infinite;

    @keyframes showup {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  .reveal {
    width: 0;
    animation: reveal 10s infinite;

    span {
      margin-left: -355px;
      animation: slidein 10s infinite;
    }

    @keyframes slidein {
      0% {
        opacity: 0;
        margin-left: -800px;
      }
      10% {
        opacity: 0;
      }
      20% {
        margin-left: -800px;
      }
      35% {
        margin-left: 0px;
      }
      100% {
        margin-left: 0px;
      }
    }

    @keyframes reveal {
      0% {
        opacity: 0;
        width: 0px;
      }
      20% {
        opacity: 1;
        width: 0px;
      }
      30% {
        width: 100%;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        width: 100%;
      }
    }
  }
}
</style>
