import Modal from '$components/common/modal/Modal.svelte';
import type {SvelteComponentDev} from 'svelte/internal';

const UI = {
	Modal: {
		modals: <SvelteComponentDev[]>[],
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
