import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from "@inlang/paraglide-sveltekit";
import { base } from "$app/paths"

export const i18n = createI18n(runtime, {
	 
	prefixDefaultLanguage: "always",
	exclude: [base + "/not-translated", base + "/excluded"],
	textDirection: {
		en: "ltr",
		ua: "ltr",
		fr: "ltr",
	},
})