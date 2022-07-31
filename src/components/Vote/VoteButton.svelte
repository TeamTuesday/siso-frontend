<script lang="ts">
  export let description = '';
</script>

<button class="vote-button">{description}</button>

<style lang="scss">
  .vote-button {
    width: 100%;
    height: 132px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    color: #222222;
    margin-bottom: 23px;
  }
</style>
