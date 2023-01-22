<script lang="ts">
  import Confirm from '@/components/common/confirm/Confirm.svelte';
  import ButtonOk from '@/components/common/button/ButtonOk.svelte';
  import UI from '@/utils/UI';

  const showModal = () => {
    UI.Modal.open({
      component: Confirm,
      text: '댓글을 삭제하시겠습니까?',
      ok() {
        console.log('댓글 삭제');
      }
    });
  };
</script>

<div>HOME</div>
<ButtonOk on:click={showModal} />
