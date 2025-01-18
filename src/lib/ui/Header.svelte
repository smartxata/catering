<script>
	import LanguageSwitcher from "./LanguageSwitcher.svelte"
    import { page } from "$app/stores";
    import * as m from "$lib/paraglide/messages.js"
	import { base } from "$app/paths"
	import { noopEncoder } from "drizzle-orm";

    function onMouse(event){
        event.preventDefault();
            event.target.style.color = "#FFFFFF";
    }
    function outMouse(event){
        event.preventDefault();
            event.target.style.color = "#000000";
    }
</script>
<header>
    <nav class="navbar">
        <a href="{base}/" aria-current={$page.route.id === "/" ? "page" : undefined} on:mouseenter={onMouse} on:mouseleave={outMouse}>{m.home()}</a>
        <a href="{base}/about/" aria-current={$page.route.id === "/about" ? "page" : undefined}>{m.about()}</a>
        <a href="{base}/menu/" aria-current={$page.route.id === "/menu" ? "page" : undefined}>{m.menu()}</a>
        <a href="{base}/gallery/" aria-current={$page.route.id === "/gallery" ? "page" : undefined}>{m.gallery()}</a>
        <a href="{base}/contact/" aria-current={$page.route.id === "/contact" ? "page" : undefined}>{m.contact()}</a>
    </nav><span>
     <h2>SYNTEZ</h2>
    </span>
     <LanguageSwitcher />
</header>


<style>

h1{
text-align: center;
font-size: 60px;
color: #333;
text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.8);
}

    header {
        display: flex;
        padding: 1em;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
        background-image:linear-gradient(180deg, #f4f0ec 0%, #e5e4e2  7.33%, #dcdcdc  22%,  #c4aead  57%, #a9a9a9  63.33%, #838996  76%, #997a8d  82%, #6e7f80  94%), radial-gradient(100% 100% at 0% 50%, #d53a42 7%, rgba(204, 58, 78, 0.75) 30.25%, rgba(194, 57, 86, 0.5) 53.5%, rgba(177, 56, 94, 0) 100%)
    }

    header-over {
        display: flex;
        padding: 1em;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
        background-image:linear-gradient(180deg, #f4f0ec 0%, #f4f0ec  7.33%, #e5e4e2  22%,  #e5e4e2  57%, #a9a9a9  63.33%, #a9a9a9  76%, #838996  82%, #997a8d  94%), radial-gradient(100% 100% at 0% 50%, #d53a42 7%, rgba(204, 58, 78, 0.75) 30.25%, rgba(194, 57, 86, 0.5) 53.5%, rgba(177, 56, 94, 0) 100%)
    }

    nav {
        display: flex-reverse;
        gap : 1em;
    }

    a[aria-current="page"] {
        font-weight: bold;
    }

    span {
            content: '';
            font-size: 3em;
            position: relative;
            padding-right: 5em; 
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: bold;
        }

        h2 {
            color: silver;
            text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5),
                2px -2px 0 rgba(255, 255, 255, 0.9);
        }
</style>