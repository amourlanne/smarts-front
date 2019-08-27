import Vue from "vue";
import VueI18n from "vue-i18n";
// messages import
import enMessages from "./translations/messages.en";
import frMessages from "./translations/messages.fr";
import { defaultLocale } from "@/config/i18n";

Vue.use(VueI18n);

const messages = {
  fr: frMessages,
  en: enMessages
};

export default new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
});
