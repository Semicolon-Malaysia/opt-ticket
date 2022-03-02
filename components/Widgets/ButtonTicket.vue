<template>
  <div class="components__buttonTicket">
    <noscript>
      <a
        href="https://www.eventbrite.sg/e/svg-x-opt-against-the-world-tickets-289131759877"
        rel="noopener noreferrer"
        target="_blank"
        >Buy Tickets on Eventbrite
      </a>
    </noscript>

    <v-btn
      outlined
      class="center-all mb-3 black--text"
      width="300"
      id="ebBtn2"
      :loading="loading"
      x-large
      tile
      @click="initWidget"
    >
      <span class="font-weight-black">
        Buy Tickets
      </span>
    </v-btn>
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
export default class ButtonTicket extends Vue {
  initWidgetDebounce = debounce(this.initWidget, 500);
  loading: Boolean = false;
  hover: Boolean = false;
  isWidgetReady: boolean = false;

  color: String = "#E1AD01";
  widgetPayload: Object = {
    widgetType: "checkout",
    eventId: "289131759877",
    modal: true,
    modalTriggerElementId: "ebBtn2",
    iframeContainerId: "eventbrite-widget-container-289131759877",
    iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: this.callback
  };

  async initWidget() {
    this.loading = true;
    try {
      if (!this.isWidgetReady) {
        await EBWidgets.createWidget(this.widgetPayload);
        this.isWidgetReady = true;
      } else {
        (this.widgetPayload as any).modal = true;
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
