<script lang="ts">
  import Button from '@/components/Common/Button.svelte';
</script>

<div class="vote-info-container">
  <div class="vote-info-writer">
    <Button src="/images/sample_user.svg" alt="sampleUser" />
    <p class="vote-info-writer-nickname">UserName</p>
  </div>
  <div class="vote-info-count">
    <Button src="/images/icon/icon_vote_count.svg" alt="voteCount" text="ooo" />
    <Button src="/images/icon/icon_like_count.svg" alt="likeCount" text="mmm" />
    <Button
      src="/images/icon/icon_comment_count.svg"
      alt="commentCount"
      text="nnn"
    />
  </div>
</div>

<style lang="scss">
  .vote-info-container {
    display: flex;
    justify-content: space-between;
    padding: 0 18px 29px;
  }
  .vote-info-writer {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #555555;
  }
  .vote-info-count {
    display: flex;
  }
</style>
