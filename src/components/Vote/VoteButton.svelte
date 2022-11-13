<script lang="ts">
  export let description = '';
</script>

<button class={$$props.class}>{description}</button>

<style lang="scss">
  .vote-button {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.06);
    background: rgba(255, 255, 255, 0.75);
    border-radius: 15px;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    color: #222222;
    margin-bottom: 12px;
    padding: 0 29px;
    &.last {
      margin-bottom: 0;
    }
  }
</style>
