<script lang="ts">
  import {onMount} from 'svelte';

  export let animation = 'animate-bounce-up';
  export let props: Module.Imodal;
  export let clickToClose = true;
  let nodeRef: HTMLElement;
  let destroyed = false;
  let disabled = true;

  let _animate: string;
  $: _animate = destroyed ? 'animate-fade-out' : 'animate-fade-in';
  $: _position = (() => {
    switch (props.position) {
      case 'top':
        return 'top-4';
      case 'right':
        return 'right-4';
      case 'bottom':
        return 'right-4 bottom-4 left-4';
      case 'left':
        return 'left-4';
      default:
        return 'center';
    }
  })();

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
      default:
        return '';
    }
  };
</script>

<div
  class="{_animate} w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center fixed inset-0"
  aria-hidden="true"
  bind:this={nodeRef}
  on:click={outsideClick}
>
  <div
    class="{animation} {_position} flex justify-center items-center absolute"
  >
    <svelte:component this={props.component} {...props} on:close={close} />
  </div>
</div>
