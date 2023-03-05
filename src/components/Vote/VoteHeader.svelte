<script lang="ts">
  import Button from '@/components/common/button/Button.svelte';
</script>

<div class="flex justify-between w-full py-4">
  <div class="flex items-center gap-[10px] text-sm text-middleGray">
    <span
      class="w-6 h-6 flex flex-col justify-center items-center p-0 bg-transparent text-xs text-white border-0 gap-[1px]"
    >
      <img class="w-full" src="/images/sample_user.svg" alt="sampleUser" />
    </span>
    <p class="text-white">UserName</p>
    <Button src="/images/icon/icn_btn_follow.svg" alt="followButton" />
  </div>
  <div class="flex">
    <Button src="/images/icon/icn_menu.svg" alt="menuButton" size="md" />
    <Button src="/images/icon/icn_share.svg" alt="shareButton" size="md" />
  </div>
</div>
