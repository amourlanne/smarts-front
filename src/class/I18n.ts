import VueI18n from "vue-i18n";
import { Locale } from "@/class/Locale";

export class I18n extends VueI18n {
  locales: Locale[];

  constructor(options: VueI18n.I18nOptions, locales: Locale[] = []) {
    super(options);
    this.locales = locales;
  }
}
