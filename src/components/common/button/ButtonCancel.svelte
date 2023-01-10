<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  export let text = '취소';
</script>

<button
  class="w-full h-9 bg-[#DDDDDD] text-sm font-medium text-[#AAAAAA] rounded-lg transition hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
  on:click={() => {
    dispatch('click');
  }}>{text}</button
>
