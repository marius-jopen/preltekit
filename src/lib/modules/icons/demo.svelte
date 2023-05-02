<script>
  import Icon from "./icon.svelte"
  import { library } from "./library"

  let name = 'sun'
  let string = `<Icon {name} />`
</script>

<div class="pt-4 px-4">
  <h3 class="mb-1">
    Simple usage
  </h3>
  <p class="mb-4">
    Just use the icon component where you see fit!
  </p>

  <div class="mb-4">
    <pre class="bg-black text-white rounded-md p-4">{string}</pre>
  </div>

  <div class="mb-12">
    <p>
      I can also use <select bind:value={name} class="inline">{#each Object.keys($library) as key}
        <option value="{key}">
          {key}
        </option>
      {/each}</select> inline: <Icon inline {name} />
    </p>
  
    <p class="text-xl">
      I can also use {name} inline: <Icon inline {name} />
    </p>
  
    <p class="text-2xl">
      I can also use {name} inline: <Icon inline {name} />
    </p>
  
    <p class="text-3xl">
      I can also use {name} inline: <Icon inline {name} />
    </p>
  
    <p class="text-4xl">
      I can also use {name} inline: <Icon inline {name} />
    </p>
  
    <p class="text-5xl">
      I can also use {name} inline: <Icon inline {name} />
    </p>
  </div>

  <h3 class="mb-1">
    Library
  </h3>

  <div class="flex gap-4 flex-wrap mb-4">
    {#each Object.keys($library) as name}
      <div class="w-32 h-32 flex items-center justify-center flex-col gap-2">
        <div class="w-8 h-8">
          <Icon {name} />
        </div>
        {name}
      </div>
    {/each}
  </div>
</div>