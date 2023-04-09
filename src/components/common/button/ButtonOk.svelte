<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  export let text = '확인';
  export let ref: HTMLButtonElement | null = null;
</script>

<button
  class="w-full h-9 bg-primary text-sm font-medium text-white rounded-lg transition hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
  bind:this={ref}
  on:click={() => {
    dispatch('click');
  }}>{text}</button
>
