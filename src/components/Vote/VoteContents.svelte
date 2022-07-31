<script lang="ts">
  import VoteButton from '@/components/Vote/VoteButton.svelte';
  export let title = 'no-title';
  export let agree_description = '';
  export let opposite_description = '';
</script>

<div class="vote-contents-container">
  <span class="vote-tag">라이프</span>
  <h3 class="vote-title">{title}</h3>
  <VoteButton description={agree_description} />
  <VoteButton description={opposite_description} />
</div>

<style lang="scss">
  .vote-contents-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 38px 16px;
  }
  .vote-tag {
    width: max-content;
    padding: 0 18px;
    height: 22px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid rgba(85, 85, 85, 0.3);
    font-size: 12px;
    line-height: 22px;
    color: #555555;
    margin-bottom: 6px;
  }
  .vote-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32px;
    font-weight: 500;
    line-height: 43px;
    color: $Black;
    word-break: keep-all;
    text-align: center;
    margin-bottom: 38px;
  }
</style>
