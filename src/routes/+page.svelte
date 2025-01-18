<script>
 
import * as m from "$lib/paraglide/messages.js"
 
</script>

<svelte:head>
  <title>{m.catering()}</title>
</svelte:head>

<div class=" ..." style="background-image: url(...)"></div>

<div class="box">
   
  <div class="row content bg-cover bg-center">
    <div class="m-title">
      {m.main_title()}
    </div> 
    <div>
      {m.main_subtitle()}
    </div>
  </div> 
</div>

<style> 
.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.m-title{
  display: inline-block;
  vertical-align: middle;
  font-size: 65px;
  line-height: 400px; /* <-- this is what you must define */

}
.box .row.content {
  flex: 1 1 auto;
  color: white;
  text-align: center;
  vertical-align: text-bottom;
  text-justify: auto;
  background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url("$lib/assets/SyntezOnions.jpg");
}
 
 
</style>