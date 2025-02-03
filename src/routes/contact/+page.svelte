<script lang="ts">
	/** @type {import('./$types').PageProps} */

	export let data ; 
	export let form;

</script>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back, {data.name}</p>
{/if}

<section class="container mx-auto px-4 py-4">
    <div class="flex flex-col justify-center items-center min-h-[40rem]">
    <h1 class="text-4xl text-slate-500">Contact Syntez</h1>
    ​
    <div class="w-3/6 mt-4 rounded-sm p-8 bg-slate-100 ">
    <form class="my-4 " action="?/contactus" method= "POST">
	 
     <div>
     <label class="label text-slate-500 mr-4" for="name">Name </label>
       <input type="text" name="name" placeholder="Type here" class="ring-1 ring-slate-200 focus:outline-none rounded-sm input w-full"  />
  </div>
     <div>
     <label class="label text-slate-500 mr-4" for="name">Email </label>
       <input type="email" name="email" placeholder="Type here" class="ring-1 ring-slate-200 focus:outline-none rounded-sm input w-full" value={form?.email ?? ''}/>
  </div>
     <div>
     <label class="label text-slate-500 mr-4" for="name">Message </label>
       <textarea class="textarea ring-1 ring-slate-200 focus:outline-none rounded-sm w-full" placeholder="Message"></textarea>
  </div>
    <button formaction="?/contactus">Submit</button>
    {#if form?.error}
    <ul class="notice-error">
      {#each form.errors as error}
        <li>{error.message}</li>
      {/each}
    </ul>
  {/if}
    </form>
    </div>
    </div>
    </section>

<style>

</style>