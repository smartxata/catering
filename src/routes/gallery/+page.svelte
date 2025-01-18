<script> 
        import Card from "$lib/components/Card.svelte";
        import * as m from "$lib/paraglide/messages.js"
    </script>
    
    <h1>{m.gallery()}</h1>
    
    
     <div class="flex justify-evenly mt-10 mb-10">
    
        <Card title="{m.dish()}" description="Dish number 1" link="/" />
        <Card title="{m.dish()}" description="Dish number 2" link="/about" />
        <Card title="{m.dish()}" description="Dish number 3" link="/contact" />
    </div> 