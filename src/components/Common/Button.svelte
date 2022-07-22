<script lang="ts">
  export let onClick = () => {
    console.log('button clicked');
  };
  export let src = '/';
  export let alt = '';
  export let text: string | number = '';
</script>

<button on:click={onClick} class="button">
  <img {src} {alt} />
  {text}
</button>

<style lang="scss">
  .button {
    width: 48px;
    height: 48px;
    padding: 0;
    border: none;
    background: $White;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 0;
    font-size: 11px;
  }
</style>
