import Vue from "vue";
import { defaultLocale } from "@/config/i18n";
import VueI18n from "vue-i18n";
import frMessages from "@/translations/messages.fr";
import enMessages from "@/translations/messages.en";

Vue.use(VueI18n);

export default new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    fr: frMessages,
    en: enMessages
  }
});
