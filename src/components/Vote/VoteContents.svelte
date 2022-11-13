<script lang="ts">
  import VoteButton from '@/components/Vote/VoteButton.svelte';
  export let title = 'no-title';
  export let agree_description = '';
  export let opposite_description = '';
</script>

<div class="vote-contents-container">
  <span class="vote-tag">라이프</span>
  <h3 class="vote-title">{title}</h3>
  <VoteButton description={agree_description} class="vote-button" />
  <VoteButton description={opposite_description} class="vote-button last" />
</div>

<style lang="scss">
  .vote-contents-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 8px;
  }
  .vote-tag {
    width: max-content;
    padding: 2px 12px;
    height: 22px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid rgba(85, 85, 85, 0.3);
    background: rgba(255, 255, 255, 0.3);
    font-size: 12px;
    line-height: 18px;
    color: $White;
    margin-bottom: 6px;
  }
  .vote-title {
    font-size: 24px;
    line-height: 32px;
    color: $White;
    text-align: center;
    margin-bottom: 17px;
    width: 320px;
  }
</style>
