import Vue from "vue";
import VueI18n from "vue-i18n";
// messages import
import enMessages from "./translations/messages.en";
import frMessages from "./translations/messages.fr";

Vue.use(VueI18n);

const messages = {
  fr: frMessages,
  en: enMessages
};

export default new VueI18n({
  locale: window.$cookies.get("lang") || "en",
  messages
});
