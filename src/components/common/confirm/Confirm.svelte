<script lang="ts">
  import ButtonCancel from '@/components/common/button/ButtonCancel.svelte';
  import ButtonOk from '@/components/common/button/ButtonOk.svelte';

  import {createEventDispatcher, onDestroy, onMount} from 'svelte';
  const dispatch = createEventDispatcher();

  let refOk: HTMLElement;
  let className: string;
  export {className as class};
  export let text = '';

  const keydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch('cancel');
    } else if (e.key === 'Enter') {
      dispatch('ok');
    }
  };
  onMount(() => {
    document.addEventListener('keydown', keydown);
    refOk.focus();
  });
  onDestroy(() => {
    document.removeEventListener('keydown', keydown);
  });

  const confirm = () => dispatch('confirm');
  const cancel = () => dispatch('cancel');
</script>

<div
  class={`w-[300px] pt-9 px-[22px] pb-5 bg-white rounded-[10px] ${className}`}
>
  <p class="font-medium leading-[22px] text-center">{text}</p>
  <div class="w-full mt-[30px] mr-[30px] flex gap-x-4">
    <ButtonCancel class="flex-1" on:click={cancel} />
    <ButtonOk class="flex-1" on:click={confirm} bind:ref={refOk} />
  </div>
</div>
