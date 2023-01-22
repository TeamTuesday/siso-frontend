import Modal from '@/components/common/modal/Modal.svelte';

const UI = {
  Modal: {
    modals: [],
    open(props: {
      component: any;
      text: string;
      ok: () => void;
      cancel: () => void;
      onlyOk?: boolean;
      position?: 'center' | 'top' | 'right' | 'bottom' | 'left';
      list?: {text?: string; color?: string; onClick?(): void}[];
    }) {
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
