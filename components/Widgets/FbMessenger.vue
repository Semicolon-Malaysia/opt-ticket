<template>
  <div class="components__fbMessenger">
    <!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

declare global {
  interface Window {
    fbAsyncInit: any;
  }
}

@Component({})
export default class FbMessenger extends Vue {
  chatbox: HTMLElement = document.getElementById(
    "fb-customer-chat"
  ) as HTMLElement;

  loading: Boolean = false;

  mounted() {}

  initFbMessenger() {
    this.chatbox.setAttribute("page_id", "105530191697211");
    this.chatbox.setAttribute("attribution", "biz_inbox");
  }

  //     window.fbAsyncInit = () => {
  //       (FB as any).init({
  //         xfbml            : true,
  //         version          : 'v12.0'
  //       });
  //     };
  //   }

  //     function(d, s, id) {
  //       var js, fjs = d.getElementsByTagName(s)[0];
  //       if (d.getElementById(id)) return;
  //       js = d.createElement(s); js.id = id;
  //       js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  //       fjs.parentNode.insertBefore(js, fjs);
  //     }(document, 'script', 'facebook-jssdk'));
}
</script>
