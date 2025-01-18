<script>
    import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime";
    import { i18n } from "$lib/i18n";
	import { goto } from "$app/navigation"
    import { page } from "$app/stores";
	import { get } from "svelte/store"

    /**
     * @param { import("$lib/paraglide/runtime").AvailableLanguageTag } newLanguage
     */
    function switchToLanguage(newLanguage) {
        const canonicalPath = i18n.route(get(page).url.pathname)
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage)
        goto( localisedPath)
    }

    /**
     * @type {Record<import("$lib/paraglide/runtime").AvailableLanguageTag, string>}
     */
    const labels = {
        en: "🇬🇧 English",
        ua: "UA Ukraine",
        fr: "FR Franch"
    }
</script>

<select on:change={e => switchToLanguage(/** @type {any} */ (e).target.value)}>
    {#each availableLanguageTags as langTag}
        <option 
            value={langTag}
            selected={languageTag() === langTag}
            >{labels[langTag]}</option>
    {/each}
</select>

<style>
    select{
        background-image:linear-gradient(180deg, #f4f0ec 0%,   #a9a9a9  63.33%, #a9a9a9  76%, #838996  82%, #997a8d  94%), radial-gradient(100% 100% at 0% 50%, #d53a42 7%, rgba(204, 58, 78, 0.75) 30.25%, rgba(194, 57, 86, 0.5) 53.5%, rgba(177, 56, 94, 0) 100%)
    }
</style>