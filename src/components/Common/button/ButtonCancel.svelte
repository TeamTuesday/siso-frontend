<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  let className: string;
  export {className as class};
  export let text = '취소';
</script>

<button
  class={`w-30 h-9 bg-[#DDDDDD] text-sm font-medium text-[#AAAAAA] rounded-lg transition hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${className}`}
  on:click={() => {
    dispatch('click');
  }}>{text}</button
>
