<script lang="ts">
  import Button from '@/components/Common/Button.svelte';
</script>

<div class="vote-info-container">
  <div class="vote-info-count">
    <Button
      src="/images/icon/icn_people.svg"
      alt="voteCount"
      text="9M"
      class="size-lg img-sm"
    />
    <Button
      src="/images/icon/icn_comment_line.svg"
      alt="commentCount"
      text="999"
      class="size-lg img-sm"
    />
    <Button
      src="/images/icon/icn_heart_line.svg"
      alt="likeCount"
      text="9.9K"
      class="size-lg img-sm"
    />
  </div>
</div>

<style lang="scss">
  .vote-info-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
  }
  .vote-info-count {
    display: flex;
  }
</style>
