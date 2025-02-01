<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	let { children } = $props();
 	import Slogan from "$lib/components/Slogan.svelte";

	import Header from "$lib/ui/Header.svelte";

</script>
  
<ParaglideJS {i18n}>
	<Slogan/>
	<Header/>
	{@render children()}
</ParaglideJS>
 