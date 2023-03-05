<script lang="ts">
  import {createEventDispatcher, onMount} from 'svelte';
  const dispatch = createEventDispatcher();

  import ButtonCancel from '@/components/common/button/ButtonCancel.svelte';
  import ButtonOk from '@/components/common/button/ButtonOk.svelte';

  export let text = '';
  export let ok: () => void;
  let okRef: HTMLButtonElement;
  export let onlyOk = false;
  let disabled = true;

  onMount(() => {
    document.addEventListener('keydown', keydown);
    okRef.focus();
    setTimeout(() => {
      disabled = false;
    }, 400);
  });

  const keydown = (e: KeyboardEvent) => {
    if (disabled) {
      return;
    }

    switch (e.key) {
      case 'Escape':
        cancel();
        break;
      default:
        break;
    }
  };

  const confirm = () => {
    if (disabled) {
      return;
    }
    disabled = true;

    if (ok) {
      ok();
    }

    document.removeEventListener('keydown', keydown);
    dispatch('close');
  };
  const cancel = () => {
    if (disabled) {
      return;
    }
    disabled = true;

    document.removeEventListener('keydown', keydown);
    dispatch('close');
  };
</script>

<div class="w-[300px] pt-9 px-[22px] pb-5 bg-white rounded-[10px]">
  <p class="font-medium leading-sm text-center">{text}</p>
  <div class="w-full mt-[30px] mr-[30px] flex gap-x-4">
    {#if !onlyOk}
      <div class="flex-1">
        <ButtonCancel on:click={cancel} />
      </div>
    {/if}
    <div class="flex-1">
      <ButtonOk on:click={confirm} bind:ref={okRef} />
    </div>
  </div>
</div>
