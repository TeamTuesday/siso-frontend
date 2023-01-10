<script lang="ts">
  import {onMount} from 'svelte';

  export let size = 'lg';
  export let src = 'images/icon/icn_user.svg';
  let loaded = false;
  let img: HTMLImageElement;

  $: _size =
    size === 'xs'
      ? 12
      : size === 'sm'
      ? 16
      : size === 'md'
      ? 24
      : size === 'lg'
      ? 32
      : size === 'xl'
      ? 40
      : size === '2xl'
      ? 48
      : size === '3xl'
      ? 64
      : size === '4xl'
      ? 80
      : '';
  $: _class =
    size === 'xs'
      ? 'w-3 h-3'
      : size === 'sm'
      ? 'w-4 h-4'
      : size === 'md'
      ? 'w-6 h-6'
      : size === 'lg'
      ? 'w-8 h-8'
      : size === 'xl'
      ? 'w-10 h-10'
      : size === '2xl'
      ? 'w-12 h-12'
      : size === '3xl'
      ? 'w-16 h-16'
      : size === '4xl'
      ? 'w-20 h-20'
      : '';

  onMount(() => {
    img.onload = onLoadImage;
    img.onerror = onErrorImage;
  });

  const onLoadImage = () => {
    loaded = true;
  };

  const onErrorImage = () => {
    src = 'images/icon/icn_user.svg';
  };
</script>

<div
  class="{_class} {loaded
    ? 'opacity-100'
    : 'opacity-0'} rounded-full overflow-hidden transition-opacity"
>
  <img {src} alt="user" width={_size} height={_size} bind:this={img} />
</div>
