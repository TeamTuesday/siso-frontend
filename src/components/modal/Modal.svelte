<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let component;
  export let className: string;
  export let props: object;

  const dispatch = createEventDispatcher();
  const confirm = () => dispatch('confirm');
  const cancel = () => dispatch('cancel');
</script>

<div
  class="w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center fixed inset-0 animate-fade-in"
>
  <svelte:component
    this={component}
    class={className}
    {...props}
    on:confirm={confirm}
    on:cancel={cancel}
  />
</div>
