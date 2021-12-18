<template>
  <div class="components__eventbriteWidget pa-3">
    <noscript>
      <a
        href="https://www.eventbrite.com/e/test-opt-anniversary-party-tickets-229268236467"
        rel="noopener noreferrer"
        target="_blank"
        >Buy Tickets on Eventbrite
      </a>
    </noscript>

    <!-- You can customize this button any way you like -->
    <div class="full-width center-all">
      <v-fab-transition v-if="$vuetify.breakpoint.smAndDown">
        <v-btn
          fixed
          :color="color"
          class="center-all mb-3"
          width="80%"
          bottom
          large
          rounded
          @click="initWidget"
        >
          <v-icon class="mr-3">mdi-ticket</v-icon>
          Buy Tickets
        </v-btn>
      </v-fab-transition>

      <v-fab-transition v-else>
        <v-btn
          :color="color"
          class="ebBtn mb-6"
          id="ebBtn"
          :fab="!hover"
          fixed
          large
          :rounded="hover"
          bottom
          right
          @click="initWidget"
          @mouseenter="onHover(1)"
          @mouseleave="onHover(0)"
        >
          <v-icon :class="hover ? 'mr-3' : null">
            mdi-ticket
          </v-icon>
          <span v-if="hover">
            Buy Tickets
          </span>
        </v-btn>
      </v-fab-transition>
    </div>
  </div>
</template>

<script lang="ts">
import { debounce } from "lodash";
import { Vue, Component, Ref } from "nuxt-property-decorator";

declare let EBWidgets: any;
let widget: any;

@Component({
  head: () => {
    return {
      script: [
        {
          vmid: "ebwidgets",
          src: "https://www.eventbrite.com/static/widgets/eb_widgets.js"
        }
      ]
    };
  }
})
export default class EventbriteWidget extends Vue {
  //   @Ref("ebBtn") ebBtn!: any;

  initWidgetDebounce = debounce(this.initWidget, 500);
  loading: Boolean = false;
  hover: Boolean = false;

  color: String = "#E1AD01";
  widgetPayload: Object = {
    widgetType: "checkout",
    eventId: "229268236467",
    modal: true,
    modalTriggerElementId: "ebBtn",
    onOrderComplete: this.callback
  };

  onHover(status: Number) {
    if (status == 1) {
      this.hover = true;
      // this.color = "#E1AD01";
    } else {
      this.hover = false;
      // this.color = "white";
    }
  }
  mounted() {
    this.initWidgetDebounce();
  }

  async initWidget() {
    this.loading = true;
    try {
      widget = await EBWidgets.createWidget(this.widgetPayload);

      if (widget) {
        console.log("ebwidgets: " + widget);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  callback() {
    console.log("Order completed!");
  }
}
</script>

<style lang="scss" scoped>
.components__eventbriteWidget {
  .ebBtn {
    border: #e1ad01 solid 3px !important;
  }
}
</style>
