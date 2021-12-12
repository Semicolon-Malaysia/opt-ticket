import { Plugin } from "@nuxt/types";
import queryString from "query-string";

export interface Helper {
  stringifyParams(params: any): string;
  formatBytes(bytes: number, decimals: number): string;
  getBase64(file: File | Blob): Promise<string>;
  prepareUrl(baseUrl: string, params: any): string;
  jsonReparse(data: any): any;
  handleRequestSuccess(response: any, redirectTo?: string): void;
  handleRequestError(error: any): void;
  confirmPrompt(message: string, icon?: string): Promise<boolean>;
  confirmDelete(): Promise<boolean>;
}

declare module "vue/types/vue" {
  interface Vue {
    $helper: Helper;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $helper: Helper;
  }

  interface Context {
    $helper: Helper;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $helper: Helper;
  }
}

const helperPlugin: Plugin = ({ $toast, app, redirect }, inject) => {
  const helper: Helper = {
    stringifyParams(params: any) {
      return queryString
        .stringify(params)
        .replace(/[^?=&]+=(&|$)/g, "")
        .replace(/&$/, "");
    },
    formatBytes(bytes: number, decimals: number) {
      if (bytes === 0) return "0 Bytes";

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
    getBase64(file: File | Blob) {
      return new Promise((resolve, reject) => {
        const reader: any = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let encoded = reader.result.replace(/^data:(.*;base64,)?/, "");
          if (encoded.length % 4 > 0) {
            encoded += "=".repeat(4 - (encoded.length % 4));
          }
          resolve(encoded);
        };
        reader.onerror = (error: any) => reject(error);
      });
    },
    prepareUrl(baseUrl: string, params: any) {
      let url = baseUrl;

      for (let key in params) {
        url = url.replace("{" + key + "}", params[key]);
      }

      return url;
    },
    jsonReparse(data: any) {
      return JSON.parse(JSON.stringify(data));
    },
    handleRequestSuccess(response: any, redirectTo?: string): void {
      const { status_message: statusMessage } = response;

      $toast.success(statusMessage);

      if (redirectTo) {
        redirect(redirectTo);
      }
    },
    handleRequestError(error: any): void {
      if (typeof error.response === "undefined") {
        $toast.error(error);
        return;
      }

      const {
        response: { data }
      } = error;
      const { status_message: statusMessage } = data;

      $toast.error(statusMessage || app.i18n.t("message.unknownServerError"));
    },
    confirmPrompt(message: string, icon?: string): Promise<boolean> {
      return new Promise(resolve => {
        $toast.show(message, {
          duration: 0,
          icon: icon,
          action: [
            {
              text: app.i18n.t("label.yes") as string,
              onClick: async (event, toastObject) => {
                toastObject.goAway(0);
                resolve(true);
              }
            },
            {
              text: app.i18n.t("label.no") as string,
              onClick: (event, toastObject) => {
                toastObject.goAway(0);
                resolve(false);
              }
            }
          ]
        });
      });
    },
    confirmDelete(): Promise<boolean> {
      const message = app.i18n.t("message.confirmDelete") as string;
      const icon = "mdi-alert";

      return this.confirmPrompt(message, icon);
    }
  };

  inject("helper", helper);
};

export default helperPlugin;
