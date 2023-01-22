import Modal from '@/components/common/modal/Modal.svelte';

const UI = {
  Modal: {
    modals: [],
    open(props: Module.Imodal) {
      const modal = new Modal({
        target: document.body,
        props: {
          props
        }
      });
      this.modals.push(modal);
    }
  }
};

export default UI;
