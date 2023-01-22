<script lang="ts">
  import Confirm from '@/components/common/confirm/Confirm.svelte';
  import ButtonOk from '@/components/common/button/ButtonOk.svelte';
  import UI from '@/utils/UI';
  import Menu from '@/components/common/menu/Menu.svelte';

  const deleteComment = () => {
    UI.Modal.open({
      component: Confirm,
      text: '댓글을 삭제하시겠습니까?',
      ok() {
        UI.Modal.open({
          component: Confirm,
          text: '댓글이 삭제되었습니다',
          onlyOk: true,
          ok() {
            console.log('댓글 삭제');
          }
        });
      }
    });
  };

  const showMore = () => {
    UI.Modal.open({
      component: Menu,
      position: 'bottom',
      list: [
        {
          text: '댓글 수정',
          onClick() {
            console.log('수정');
          }
        },
        {
          text: '댓글 삭제',
          color: 'red',
          onClick() {
            deleteComment();
          }
        },
        {
          text: '닫기',
          onClick() {
            console.log('취소');
          }
        }
      ]
    });
  };
</script>

<div>HOME</div>
<ButtonOk on:click={deleteComment} />
<ButtonOk on:click={showMore} />
