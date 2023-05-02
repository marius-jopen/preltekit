<script>
  import { libReady, library, strings } from "./library"

  export let name = ""
  export let state = "active"
  export let inline = false
  export let disabled = false
  export let role = 'button' // button | static | static-button

  export let activeColor = "#1c1c1c"
  export let inactiveColor = "#555"
  export let disabledColor = "#ccc"

  let computedState = state

  let svg = ''

  const onMouseLeave = () => {
    if (role !== 'static' && role !== 'static-button') {
      if (computedState === "active" && !disabled) {
        computedState = state
      }
    }
  }

  const onMouseEnter = () => {
    if (role !== 'static' && role !== 'static-button') {
      if (computedState === "inactive" && !disabled) {
        computedState = "active"
      }
    }
  }

  $: computedState = state

  $: if ($libReady) {
    if ($library[name]) {
      svg = $library[name]
    } else {
      svg = ''
    }
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->

{#if $libReady && svg !== ''}
  <div
    on:click
    on:keydown
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    {role}
    tabindex="{role === 'button' ? 0 : -1}"
    aria-pressed="false"
    title={$strings[name]}
    class:isInline={inline}
    class:inline-block={inline}
    class:flex={!inline}
    class="wrapper justify-center aspect-square items-center w-full h-full {computedState}"
    class:cursor-pointer={role !== 'static' && !disabled && computedState !== "disabled"}
    style="--active: {activeColor}; --inactive: {inactiveColor}; --disabled: {disabledColor};"
  >
    {@html svg}
  </div>
{/if}

<style lang="postcss">
  .wrapper :global(svg) {
    @apply w-full h-full;
  }

  .wrapper :global(path) {
    transition: fill 0.2s ease;
    font-size: inherit;
  }
  .wrapper.active :global(polygon),
  .wrapper.active :global(circle),
  .wrapper.active :global(rect),
  .wrapper.active :global(path) {
    fill: var(--active);
  }

  .wrapper.inactive :global(polygon),
  .wrapper.inactive :global(circle),
  .wrapper.inactive :global(rect),
  .wrapper.inactive :global(path) {
    fill: var(--inactive);
  }

  .wrapper.disabled :global(polygon),
  .wrapper.disabled :global(circle),
  .wrapper.disabled :global(rect),
  .wrapper.disabled :global(path) {
    fill: var(--disabled);
  }

  .isInline {
    height: 1em;
    width: 1em;
  }
</style>