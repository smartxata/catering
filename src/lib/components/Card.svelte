<script>
    let { title, description, link, img_src } = $props();
  </script>
  
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body bg-center bg-cover" style="background-image:url({img_src});">
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
      <div class="card-actions justify-end">
        <a href="{link}" class="btn btn-primary">{title}</a>
      </div>
    </div>
  </div>