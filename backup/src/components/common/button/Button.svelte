<script lang="ts">
  export let onClick = () => {
    console.log('button clicked');
  };
  export let src = '/';
  export let alt = '';
  export let text: string | number = '';
  export let size = 'md';
  export let imgSize = 'md';
</script>

<button
  on:click={onClick}
  class={`${size === 'lg' ? 'w-12 h-12' : 'w-9 h-9'} `}
  style={$$props.style}
>
  <img class={`${imgSize === 'lg' ? 'w-9' : 'w-6'} w-full`} {src} {alt} />
  {text}
</button>

<style lang="postcss">
  button {
    @apply flex flex-col justify-center items-center p-0 bg-transparent text-xs text-white border-0 gap-[1px];
  }
</style>
