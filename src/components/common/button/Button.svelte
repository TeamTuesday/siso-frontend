<script lang="ts">
  export let onClick = () => {
    console.log('button clicked');
  };
  export let src = '/';
  export let alt = '';
  export let text: string | number = '';
  export let size = '';
  export let imgSize = '';
  export let imgFull = true;
</script>

<button
  on:click={onClick}
  class:button-size-md={size === 'md'}
  class:button-size-lg={size === 'lg'}
  style={$$props.style}
>
  <img
    class:w-full={imgFull}
    class:w-9={imgSize === 'lg'}
    class:w-6={imgSize === 'md'}
    {src}
    {alt}
  />
  {text}
</button>

<style lang="postcss">
  button {
    @apply flex flex-col justify-center items-center p-0 bg-transparent text-xs text-white border-0 gap-[1px];
  }
  .button-size-md {
    @apply w-9 h-9;
  }
  .button-size-lg {
    @apply w-12 h-12;
  }
</style>
