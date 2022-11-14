<script lang="ts">
  import Confirm from '@/components/common/confirm/Confirm.svelte';
  import Modal from '@/components/modal/Modal.svelte';
  import ButtonOk from '@/components/common/button/ButtonOk.svelte';

  const showModal = () => {
    const modal = new Modal({
      target: document.body,
      props: {
        component: Confirm,
        className: 'animate-bounce-in',
        props: {
          text: '댓글을 삭제하시겠습니까?'
        }
      }
    });

    const destroy = () => {
      modal.$destroy();
    };
    modal.$on('confirm', () => {
      destroy();
    });
    modal.$on('cancel', () => {
      destroy();
    });
  };
</script>

<div>HOME</div>
<ButtonOk on:click={showModal} />
