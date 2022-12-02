import Modal from '@/components/modal/Modal.svelte';
import type {SvelteComponent} from 'svelte';

const UI = {
  Modal: {
    modals: [],
    open(
      component: SvelteComponent,
      props: {
        text: string;
        ok?(): void;
      }
    ) {
      const modal = new Modal({
        target: document.body,
        props: {
          component,
          props
        }
      });
      this.modals.push(modal);
    }
  }
};

export default UI;
