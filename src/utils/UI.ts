import Modal from '@/components/modal/Modal.svelte';

const UI = {
  Modal: {
    modals: [],
    open(props: {component: any; text: string; ok: () => void}) {
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
