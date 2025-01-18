<script>
    
import Hero from "$lib/components/Hero.svelte";
import Card from "$lib/components/Card.svelte";
    import * as m from "$lib/paraglide/messages.js";

    // import imgSrc from '$lib/assets/SyntezSoup.jpg'; 
    const images = import.meta.glob(['$lib/assets/**.jpg', '$lib/assets/**.png', '$lib/assets/**.svg'], { eager: true, as: 'url' });
   let imgSrc4Home = images["/src/lib/assets/"+ "SyntezBorsh.jpg"];
   let imgSrc4About = images["/src/lib/assets/"+ "SyntezCake.jpg"];
   let imgSrc4Contact = images["/src/lib/assets/"+ "SyntezSoup.jpg"];
</script>

  

 <div class="flex justify-evenly mt-10 mb-10">

    <Card title="{m.home()}" description="You are here." link="/"  img_src={imgSrc4Home}/>
    <Card title="{m.about()}" description="About.. what?" link="/about"  img_src={imgSrc4About}/>
    <Card title="{m.contact()}" description="Get in touch" link="/contact" img_src={imgSrc4Contact}/>
</div> 