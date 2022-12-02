<script lang="ts">
  import {onMount} from 'svelte';

  export let component;
  export let animation = 'animate-bounce-up';
  export let props: {text: string; ok: () => void};
  export let clickToClose = true;
  let nodeRef: HTMLElement;
  let destroyed = false;
  let disabled = true;

  let animate: string;
  $: animate = destroyed ? 'animate-fade-out' : 'animate-fade-in';

  onMount(() => {
    setTimeout(() => {
      disabled = false;
    }, 400);
  });

  const outsideClick = ({target}) => {
    if (clickToClose && target === nodeRef) {
      close();
    }
  };

  const close = () => {
    if (disabled) {
      return;
    }
    disabled = true;

    const reverseAnimation = getReverseAnimation();
    animation = '';
    setTimeout(() => {
      animation = reverseAnimation;
    });
    destroyed = true;
    disabled = true;
    setTimeout(() => {
      nodeRef.parentNode?.removeChild(nodeRef);
    }, 350);
  };

  const getReverseAnimation = () => {
    switch (animation) {
      case 'animate-bounce-up':
        return 'animate-bounce-up-reverse';
    }
  };
</script>

<div
  class="{animate} w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center fixed inset-0"
  aria-hidden="true"
  bind:this={nodeRef}
  on:click={outsideClick}
>
  <div class={animation}>
    <svelte:component this={component} {...props} on:close={close} />
  </div>
</div>
