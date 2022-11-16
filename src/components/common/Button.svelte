<script lang="ts">
  export let onClick = () => {
    console.log('button clicked');
  };
  export let src = '/';
  export let alt = '';
  export let text: string | number = '';
</script>

<button on:click={onClick} class={$$props.class} style={$$props.style}>
  <img {src} {alt} />
  {text}
</button>

<style lang="scss">
  button {
    padding: 0;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1px;
    font-size: 11px;
    color: $White;
    &.circle {
      border-radius: 100%;
    }
    &.size-lg {
      width: 48px;
      height: 48px;
    }
    &.size-md {
      width: 36px;
      height: 36px;
    }
    &.size-sm {
      width: 24px;
      height: 24px;
    }
    &.img-sm {
      img {
        width: 24px;
        height: 24px;
      }
    }
    &.img-md {
      img {
        width: 36px;
        height: 36px;
      }
    }
  }

  img {
    width: 100%;
  }
</style>
