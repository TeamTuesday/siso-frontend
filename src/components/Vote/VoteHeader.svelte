<script lang="ts">
  import Button from '@/components/Common/Button.svelte';
  import {router} from 'tinro';

  const goBack = () => {
    router.goto('/list');
  };
</script>

<div class="vote-header">
  <Button src="/images/icon/icon_back.svg" alt="backButton" onClick={goBack} />
  <Button src="/images/icon/icon_menu.svg" alt="menuButton" />
</div>

<style lang="scss">
  .vote-header {
    display: flex;
    justify-content: space-between;
    padding-top: 4px;
    padding-left: 4px;
  }
</style>
