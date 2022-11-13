<script lang="ts">
  import Button from '@/components/Common/Button.svelte';
</script>

<div class="vote-header">
  <div class="vote-profile">
    <Button
      src="/images/sample_user.svg"
      alt="sampleUser"
      class="circle size-sm"
    />
    <p class="vote-profile-nickname">UserName</p>
    <Button src="/images/icon/icn_btn_follow.svg" alt="followButton" />
  </div>
  <div class="vote-menu">
    <Button src="/images/icon/icn_menu.svg" alt="menuButton" class="size-md" />
    <Button
      src="/images/icon/icn_share.svg"
      alt="shareButton"
      class="size-md"
    />
  </div>
</div>

<style lang="scss">
  .vote-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
  }
  .vote-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #555555;
  }
  .vote-profile-nickname {
    color: $White;
  }
  .vote-menu {
    display: flex;
  }
</style>
