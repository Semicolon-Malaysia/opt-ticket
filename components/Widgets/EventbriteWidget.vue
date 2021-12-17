<template>
  <div class="components__eventbriteWidget">
    <noscript>
      <a
        href="https://www.eventbrite.com/e/test-opt-anniversary-party-tickets-229268236467"
        rel="noopener noreferrer"
        target="_blank"
        >Buy Tickets on Eventbrite
      </a>
    </noscript>

    <!-- You can customize this button any way you like -->
    <v-btn
      class="d-flex mx-auto mb-12"
      width="200"
      rounded
      large
      color="white"
      id="ebBtn"
      @click="initWidgetDebounce"
      v-text="'Buy Tickets'"
    >
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
export default class EventbriteWidget extends Vue {
  //   @Ref("ebBtn") ebBtn!: any;

  initWidgetDebounce = debounce(this.initWidget, 500);

  widgetPayload: Object = {
    widgetType: "checkout",
    eventId: "229268236467",
    modal: true,
    modalTriggerElementId: "ebBtn",
    onOrderComplete: this.callback
  };

  mounted() {
    //   this.initWidgetDebounce();
    debounce(() => {
      console.log(EBWidgets);
    }, 1000);
  }

  async initWidget() {
    try {
      widget = await EBWidgets.createWidget(this.widgetPayload);

      if (widget) {
        console.log(widget);
      }
    } catch (error) {
      console.log(error);
    }
  }

  callback() {
    console.log("Order completed!");
  }
}
</script>

<style lang="scss" scoped></style>
