import Vue from "vue";
import i18nConfig from "@/config/i18n";
import { I18n } from "@/class/I18n";
import locales from "@/config/locales";

Vue.use(I18n);

export default new I18n(i18nConfig, locales);
